import { scaleOrdinal } from "d3";

export const TYPE_SCALE = ["primordial", "creation", "elemental", "human", "secondary"];
export const PADDING = 5;
export const BASE = 20;
export const GR = 1.62;
export const RADIUS_SCALE = scaleOrdinal()
  .domain(TYPE_SCALE)
  .range([BASE * (GR * 4), BASE * (GR * 3), BASE * (GR * 2), BASE * GR, BASE]);
