import { scaleOrdinal, scaleLinear } from "d3";

export const TYPE_SCALE = ["primordial", "creation", "elemental", "human", "secondary"];
export const PADDING = 5;
export const BASE = 20;
export const GR = 1.62;
export const RADIUS_SCALE = scaleOrdinal()
  .domain(TYPE_SCALE)
  .range([BASE * (GR * 4), BASE * (GR * 3), BASE * (GR * 2), BASE * GR, BASE]);

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

export const GOD_COLORS = scaleOrdinal()
  .domain(TYPE_SCALE)
  .range(["#008AA1", "#D28360", "#5C8A73", "#B08699", "#FE0000"]);

export const FADE_SCALE = scaleLinear().range([0.1, 1]).domain([0, 5]);

// Accessors
export const getRelationType = (d) => d.relation;
export const getName = (d) => d.name;
export const getImportance = (d) => d.importance;
