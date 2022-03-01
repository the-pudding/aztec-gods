const CWD = process.cwd();
import fs from "fs";
import { readFile } from "fs/promises";
import aq, { op } from "arquero";

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

// const relations = JSON.parse(
//   await readFile(new URL(`${CWD}/src/data/gods/tidy/relations.json`, import.meta.url))
// );
// const gods = JSON.parse(
//   await readFile(new URL(`${CWD}/src/data/gods/tidy/gods.json`, import.meta.url))
// );

const calculateForceLayout = async () => {
  const raw = await aq.loadCSV(`${CWD}/src/data/gods/raw/light-db.tsv`, { delimiter: "\t" });

  // Gods (nodes)
  const gods = raw
    .select({
      ID: "id",
      Name: "name",
      type: "importance",
      Field: "field",
      Text: "bio",
      "Other names or spelling": "spellings",
      "Illustration source": "source",
      "Aspects (other gods that can change into or him/her or share similar domains)": "aspect"
    })
    .derive({ name: (d) => op.trim(d.name), id: (d) => op.trim(d.id) })
    .filter((d) => d.id !== "cihuateteo")
    .derive({
      fertility: (d) => (op.match(d.field, "fertility") ? 1 : 0),
      subsistence: (d) => (op.match(d.field, "subsistence") ? 1 : 0),
      trade: (d) => (op.match(d.field, "trade") ? 1 : 0),
      pleasure: (d) => (op.match(d.field, "pleasure") ? 1 : 0),
      destruction: (d) => (op.match(d.field, "destruction") ? 1 : 0),
      death: (d) => (op.match(d.field, "death") ? 1 : 0),
      war: (d) => (op.match(d.field, "war") ? 1 : 0),
      magic: (d) => (op.match(d.field, "magic") ? 1 : 0),
      craft: (d) => (op.match(d.field, "craft") ? 1 : 0)
    });

  const godNames = [...gods.array("name")];

  // relations (links)
  const relations = gods
    .select({ name: "source" }, "aspect")
    .derive({ aspect: (d) => op.trim(d.aspect) })
    .derive({ target: (d) => op.split(d.aspect, ", ") })
    .unroll("target")
    .select("source", "target");
  // .derive({ is_unique: (d) => op.includes(godNames, d.target) })

  const unique_relations = [...relations.objects()].filter((d) => godNames.includes(d.target));

  fs.writeFileSync(`${CWD}/src/data/gods/tidy/gods.json`, JSON.stringify(gods.objects()));
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/relations.json`, JSON.stringify(unique_relations));

  // Layout
  let nodes = [...gods.objects()];
  let links = [...unique_relations];

  const simulation = forceSimulation(nodes);

  simulation
    .force("collide", rectCollide(PADDING))
    .force(
      "link",
      forceLink(links).id((d) => getName(d))
    )
    .force("center", forceCenter())
    .alpha(1);

  for (let i = 0; i < 300; i++) simulation.tick();

  const coord = [
    ...nodes.map((n) => ({
      x: n.x,
      y: n.y
    }))
  ];
  const god_nodes = [...gods.objects()].map((god, i) => ({
    ...coord[i],
    ...god
  }));
  return {
    god_nodes,
    links: links.map((l) => ({
      source: { x: l.source.x, y: l.source.y, name: l.source.name },
      target: { x: l.target.x, y: l.target.y, name: l.target.name },
      index: l.index
    }))
  };
};

const getLayoutCoordinates = async () => {
  const aspect = await calculateForceLayout();

  const nodes = aspect.god_nodes;
  const linksCoord = aspect.links;

  fs.writeFileSync(`${CWD}/src/data/gods/tidy/nodes.json`, JSON.stringify(nodes));
  fs.writeFileSync(`${CWD}/src/data/gods/tidy/links.json`, JSON.stringify(linksCoord));
};

(async () => {
  getLayoutCoordinates();
})();
