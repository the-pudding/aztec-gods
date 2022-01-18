const CWD = process.cwd();
import fs from "fs";
import { readFile } from "fs/promises";

import { scaleOrdinal, forceLink, forceSimulation, forceCenter, quadtree } from "d3";

const relations = JSON.parse(
  await readFile(new URL(`${CWD}/src/data/gods/tidy/relations.json`, import.meta.url))
);
const gods = JSON.parse(
  await readFile(new URL(`${CWD}/src/data/gods/tidy/gods.json`, import.meta.url))
);

const typeScale = ["primordial", "creation", "elemental", "human", "secondary"];

const getRelationType = (d) => d.relation;
const getName = (d) => d.name;
const getImportance = (d) => d.importance;
const PADDING = 5;
const base = 20;
const gr = 1.62;
const radiusScale = scaleOrdinal()
  .domain(typeScale)
  .range([base * (gr * 4), base * (gr * 3), base * (gr * 2), base * gr, base]);
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
  let nodes = [...gods];
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
  const allLinks = await calculateForceLayout(undefined);
  const cooperation = await calculateForceLayout("cooperation");
  const authority = await calculateForceLayout("authority");
  const aspect = await calculateForceLayout("aspect");

  const godsCoord = gods.map((god, i) => ({
    allLinks: allLinks.coord[i],
    cooperation: cooperation.coord[i],
    authority: authority.coord[i],
    aspect: aspect.coord[i],
    ...god
  }));
  // const linksCoord = links.map((link, i) => ({
  //   allLinks: allLinks.links[i],
  //   cooperation: cooperation.links[i],
  //   authority: authority.links[i],
  //   aspect: aspect.links[i],
  //   ...link
  // }));
  const linksCoord = {
    allLinks: allLinks.links,
    cooperation: cooperation.links,
    authority: authority.links,
    aspect: aspect.links
  };
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/layouts.json`, JSON.stringify(godsCoord));
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/links.json`, JSON.stringify(linksCoord));
};

(async () => {
  getLayoutCoordinates();
})();
