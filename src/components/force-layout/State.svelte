<script>
  import { scaleLinear, scaleOrdinal } from "d3";
  import { setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import layouts from "$data/gods/tidy/layouts.json";
  import links from "$data/gods/tidy/links.json";
  import { RADIUS_SCALE } from "$domain/constants.js";

  let width = 0;
  const height = 600; //width / 2;

  $: center = [width / 2, height / 2];
  const RADIUS = 35;
  const margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };

  $: bounds = {
    width,
    height,
    margins,
    center,
    chartWidth: width - margins.left - margins.right,
    chartHeight: height - margins.top - margins.bottom
  };

  // Accessors
  const getRelationType = (d) => d.relation;
  const getName = (d) => d.name;
  const getImportance = (d) => d.importance;

  // Scales
  const typeScale = ["primordial", "creation", "elemental", "human", "secondary"];

  $: godColorScale = scaleOrdinal()
    .domain(typeScale)
    .range(["#008AA1", "#D28360", "#5C8A73", "#B08699", "#FE0000"]);

  $: godDomain = [...new Set(layouts.map((d) => getName(d)))];

  // const BASE = 20;
  // const GR = 1.62;
  // $: radiusScale = scaleOrdinal()
  //   .domain(typeScale)
  //   .range([BASE * (GR * 4), BASE * (GR * 3), BASE * (GR * 2), BASE * GR, BASE]);

  $: keywords = Object.keys(layouts[0]).slice(2, layouts.length);
  $: fadeScale = scaleLinear().range([0.1, 1]).domain([0, 5]);

  // Interaction
  const createInteraction = () => {
    const { subscribe, set } = writable(undefined);
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const interaction = createInteraction();

  // Keywords
  const createKeywordHighlight = () => {
    const { subscribe, set } = writable(undefined);
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const keyword = createKeywordHighlight();

  // Links
  const createLinkHighlight = () => {
    const { subscribe, set } = writable("allLinks");
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const linkHighlight = createLinkHighlight();

  $: linkTypes = Object.keys(links);
  $: currentLinks = derived([linkHighlight], ([$linkHighlight]) => links[$linkHighlight]);

  // Context
  $: context = {
    bounds,
    getName,
    getRelationType,
    getImportance,
    keywords,
    radius: RADIUS,
    linkTypes,
    godColorScale,
    godDomain,
    radiusScale: RADIUS_SCALE,
    fadeScale,
    layouts,
    currentLinks,
    interaction,
    keyword,
    linkHighlight
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper">
  <div class="chart-wrapper" bind:clientWidth={width}>
    {#if width > 0}
      <div class="chart-html" style="width:{bounds.width}px; height:{bounds.height}px;">
        <slot name="chart-html" />
      </div>
      <svg class="chart-svg" width={bounds.width} height={bounds.height}>
        <!-- <rect x={0} y={0} width={bounds.width} height={bounds.height} fill="#efefef" /> -->
        <slot name="chart-svg" />
      </svg>
    {/if}
  </div>
  <div class="controls"><slot name="controls" /></div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "viz-area meta-area";

    margin: 1rem;
    position: relative;
    height: 100vh;
  }

  .chart-wrapper {
    grid-area: viz-area;
  }
  .chart-html,
  .chart-svg {
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .controls {
    grid-area: meta-area;
  }
</style>
