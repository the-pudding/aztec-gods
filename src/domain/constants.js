import variables from "$data/variables.json";
import { scaleLinear, scaleOrdinal } from "d3";

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

// export const LINK_TYPES = ["aspect"];

// Scales
// export const GOD_COLORS = scaleOrdinal()
//   .domain(TYPE_SCALE)
//   .range([
//     variables.category.secondary,
//     variables.category.primordial,
//     variables.category.creation,
//     variables.category.elemental,
//     "white"
//   ]);
// export const FADE_SCALE = scaleLinear().range([0.1, 1]).domain([0, 5]);
export const FIELDS = ["death", "life", "spiritual", "material"];

// Accessors
export const getRelationType = (d) => d.relation;
export const getName = (d) => d.name;
export const getImportance = (d) => d.importance;
