import { scaleOrdinal, scaleLinear, max } from "d3";
import nodes from "$data/gods/tidy/nodes.json";

// Layout
export const PADDING = 5;
export const GR = 1.62;

// Domains
export const TYPE_SCALE = ["primordial", "creation", "elemental", "human", "secondary"];
export const KEYWORDS = [
  "animals",
  "celestial",
  "trade",
  "death",
  "violence",
  "food",
  "knowledge",
  "fertility",
  "excess",
  "nature",
  "pleasure"
];
export const LINK_TYPES = ["allLinks", "cooperation", "authority", "aspect"];

// Maximum domain extent of the force layout
const allX = LINK_TYPES.flatMap((type) => nodes.map((d) => d[type].x));
const xMax = max(allX, (d) => Math.abs(d));
const allY = LINK_TYPES.flatMap((type) => nodes.map((d) => d[type].y));
const yMax = max(allY, (d) => Math.abs(d));
export const mapOuterDomain = Math.max(xMax, yMax);

// Scales
export const GOD_COLORS = scaleOrdinal()
  .domain(TYPE_SCALE)
  .range(["#008AA1", "#D28360", "#5C8A73", "#B08699", "#FE0000"]);
export const FADE_SCALE = scaleLinear().range([0.1, 1]).domain([0, 5]);

// Accessors
export const getRelationType = (d) => d.relation;
export const getName = (d) => d.name;
export const getImportance = (d) => d.importance;
