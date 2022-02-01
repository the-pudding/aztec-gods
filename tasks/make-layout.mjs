const CWD = process.cwd();
import fs from "fs";
import { readFile } from "fs/promises";

import { forceLink, forceSimulation, forceCenter, quadtree, scaleOrdinal } from "d3";
// import { PADDING, TYPE_SCALE, GR } from "../src/domain/constants.js";

// Layout
const PADDING = 5;
const GR = 1.62;

// Domains
const TYPE_SCALE = ["primordial", "creation", "elemental", "human", "secondary"];

let BASE = 20;
const radiusScale = scaleOrdinal()
  .domain(TYPE_SCALE)
  .range([BASE * (GR * 4), BASE * (GR * 3), BASE * (GR * 2), BASE * GR, BASE]);

const relations = JSON.parse(
  await readFile(new URL(`${CWD}/src/data/gods/tidy/relations.json`, import.meta.url))
);
const gods = JSON.parse(
  await readFile(new URL(`${CWD}/src/data/gods/tidy/gods.json`, import.meta.url))
);

const getRelationType = (d) => d.relation;
const getName = (d) => d.name;

const getGeometricPositions = (god) => {
  switch (god) {
    case "Huitzilopochtli":
      return { x: 0.5, y: 0.65 };
    case "Mayahuel":
      return { x: 0.5, y: 0.2 };
    case "Mictlantecuhtli":
      return { x: 0.35, y: 0.35 };
    case "Mixcoatl":
      return { x: 0.5, y: 0.8 };
    case "Ometeotl":
      return { x: 0.5, y: 0.5 };
    case "Quetzalcoatl":
      return { x: 0.35, y: 0.5 };
    case "Tezcatlipoca":
      return { x: 0.5, y: 0.35 };
    case "Tlaloc":
      return { x: 0.35, y: 0.65 };
    case "Tlaltecuhtli":
      return { x: 0.65, y: 0.35 };
    case "Xipe Totec":
      return { x: 0.65, y: 0.5 };
    case "Xiuhtecuhtli":
      return { x: 0.65, y: 0.65 };
    case "Xochiquetzal":
      return { x: 0.2, y: 0.5 };
    case "Yacatecuhtli":
      return { x: 0.8, y: 0.5 };
    default:
      return { x: 0.5, y: 0.5 };
  }
};

const rectCollide = (padding) => {
  let nodes;
  // let padding = 2;
  function force(alpha) {
    const quad = quadtree(
      nodes,
      (d) => d.x,
      (d) => d.y
    );
    for (const d of nodes) {
      quad.visit((q, x1, y1, x2, y2) => {
        let updated = false;
        if (q.data && q.data !== d) {
          let x = d.x - q.data.x,
            y = d.y - q.data.y,
            xSpacing = padding + (radiusScale(q.data.importance) + radiusScale(d.importance)) / 2,
            ySpacing = padding + (radiusScale(q.data.importance) + radiusScale(d.importance)) / 2,
            absX = Math.abs(x),
            absY = Math.abs(y),
            l,
            lx,
            ly;

          if (absX < xSpacing && absY < ySpacing) {
            l = Math.sqrt(x * x + y * y);

            lx = (absX - xSpacing) / l;
            ly = (absY - ySpacing) / l;

            // the one that's barely within the bounds probably triggered the collision
            if (Math.abs(lx) > Math.abs(ly)) {
              lx = 0;
            } else {
              ly = 0;
            }
            d.x -= x *= lx;
            d.y -= y *= ly;
            q.data.x += x;
            q.data.y += y;

            updated = true;
          }
        }
        return updated;
      });
    }
  }

  force.initialize = (_) => (nodes = _);

  return force;
};

const calculateForceLayout = async (relation) => {
  let nodes = [...gods]; // Not pure...
  let links = relation
    ? [...relations.filter((link) => getRelationType(link) === relation)]
    : [...relations];
  const simulation = forceSimulation(nodes);

  simulation
    .force("collide", rectCollide(PADDING))
    .force(
      "link",
      forceLink(links).id((d) => getName(d))
    )
    .force("center", forceCenter())
    .alpha(1);

  for (let i = 0; i < 200; i++) simulation.tick();

  const coord = [
    ...nodes.map((n) => ({
      x: n.x,
      y: n.y
    }))
  ];

  return {
    coord,
    links: links.map((l) => ({
      source: { x: l.source.x, y: l.source.y, name: l.source.name },
      target: { x: l.target.x, y: l.target.y, name: l.target.name },
      relation: l.relation,
      index: l.index
    }))
  };
};

const getLayoutCoordinates = async () => {
  const geometric = [...gods].map((god) => getGeometricPositions(god.name));
  const allLinks = await calculateForceLayout(undefined);
  const cooperation = await calculateForceLayout("cooperation");
  const authority = await calculateForceLayout("authority");
  const aspect = await calculateForceLayout("aspect");

  const nodes = gods.map((god, i) => ({
    geometric: geometric[i],
    allLinks: allLinks.coord[i],
    cooperation: cooperation.coord[i],
    authority: authority.coord[i],
    aspect: aspect.coord[i],
    ...god
  }));
  const linksCoord = {
    geometric: [], // No links for geometric layout
    allLinks: allLinks.links,
    cooperation: cooperation.links,
    authority: authority.links,
    aspect: aspect.links
  };
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/nodes.json`, JSON.stringify(nodes));
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/links.json`, JSON.stringify(linksCoord));
};

(async () => {
  getLayoutCoordinates();
})();
