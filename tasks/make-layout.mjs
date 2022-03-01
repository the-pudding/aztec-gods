const CWD = process.cwd();
import fs from "fs";
import { readFile } from "fs/promises";

import { forceLink, forceSimulation, forceCenter, quadtree, scaleOrdinal } from "d3";
// Layout
const PADDING = 5;
const GR = 1.62;

let BASE = 20;

// Domains
const TYPE_SCALE = ["primordial", "creation", "elemental", "human", "secondary"];

const radiusScale = scaleOrdinal()
  .domain(TYPE_SCALE)
  .range([BASE * (GR * 4), BASE * (GR * 3), BASE * (GR * 2), BASE * GR, BASE]);

const relations = JSON.parse(
  await readFile(new URL(`${CWD}/src/data/gods/tidy/relations.json`, import.meta.url))
);
const gods = JSON.parse(
  await readFile(new URL(`${CWD}/src/data/gods/tidy/gods.json`, import.meta.url))
);

const getName = (d) => d.name;

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

const calculateForceLayout = async () => {
  let nodes = [...gods]; // Not pure...
  let links = [...relations.filter((link) => link.relation === "aspect")];

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
      index: l.index
    }))
  };
};

const getLayoutCoordinates = async () => {
  const aspect = await calculateForceLayout();

  const nodes = gods.map((god, i) => ({
    ...aspect.coord[i],
    ...god
  }));
  const linksCoord = aspect.links;
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/nodes.json`, JSON.stringify(nodes));
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/links.json`, JSON.stringify(linksCoord));
};

(async () => {
  getLayoutCoordinates();
})();
