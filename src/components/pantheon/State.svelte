<script>
  import links from "$data/gods/tidy/links.json";
  import nodes from "$data/gods/tidy/nodes.json";
  import doc from "$data/doc.json";
  import viewport from "$stores/viewport";

  import {
    FADE_SCALE,
    getImportance,
    getName,
    getRelationType,
    GOD_COLORS,
    GR,
    KEYWORDS,
    LINK_TYPES,
    TYPE_SCALE
  } from "$domain/constants.js";
  import { max, scaleLinear, scaleOrdinal } from "d3";
  import { setContext } from "svelte";
  import { derived, writable } from "svelte/store";

  export let activeStep = doc.pantheon[0];

  let width = writable(0);

  const margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  const controlledWidth = derived([width, viewport], ([$width, $viewport]) =>
    Math.min($width, $viewport.height - 64 - margins.top - margins.bottom)
  );

  const bounds = derived([controlledWidth], ([$controlledWidth]) => ({
    width: $controlledWidth,
    height: $controlledWidth,
    margins,
    chartWidth: $controlledWidth - margins.left - margins.right,
    chartHeight: $controlledWidth - margins.top - margins.bottom
  }));

  // Maximum domain extent of the force layout
  $: allX = LINK_TYPES.filter((t) => t !== "geometric").flatMap((type) =>
    nodes.map((d) => d[type].x)
  );
  $: xMax = max(allX, (d) => Math.abs(d));
  $: allY = LINK_TYPES.filter((t) => t !== "geometric").flatMap((type) =>
    nodes.map((d) => d[type].y)
  );
  $: yMax = max(allY, (d) => Math.abs(d));
  $: mapOuterDomain = Math.max(xMax, yMax);

  $: godDomain = [...new Set(nodes.map((d) => getName(d)))];

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

  const createSelection = () => {
    const { subscribe, set } = writable(undefined);
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const selection = createSelection();

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
    const { subscribe, set } = writable("geometric");
    return {
      subscribe,
      highlight: (d) => set(d),
      lowlight: () => set(undefined)
    };
  };
  const linkHighlight = createLinkHighlight();

  $: linkHighlight.highlight(activeStep.layout);

  $: currentLinks = derived([linkHighlight], ([$linkHighlight]) => links[$linkHighlight]);

  // Scales
  $: xScale = derived([bounds, linkHighlight], ([$bounds, $linkHighlight]) => {
    let domain = $linkHighlight === "geometric" ? [0, 1] : [-mapOuterDomain, mapOuterDomain];
    return scaleLinear().domain(domain).range([0, $bounds.chartWidth]);
  });
  $: yScale = derived([bounds, linkHighlight], ([$bounds, $linkHighlight]) => {
    let domain = $linkHighlight === "geometric" ? [0, 1] : [-mapOuterDomain, mapOuterDomain];
    return scaleLinear().domain(domain).range([$bounds.chartHeight, 0]);
  });

  $: radiusScale = derived([bounds, linkHighlight], ([$bounds, $linkHighlight]) => {
    let base = $bounds.chartWidth * 0.02;
    return $linkHighlight === "geometric"
      ? scaleOrdinal()
          .domain(["secondary"])
          .range([base])
          .unknown(base * (GR * 4))
      : scaleOrdinal()
          .domain(TYPE_SCALE)
          .range([base * (GR * 4), base * (GR * 3), base * (GR * 2), base * GR, base]);
  });

  $: _nodes = writable(nodes);

  // Context
  $: context = {
    bounds,
    nodes: _nodes,
    xScale,
    yScale,
    getName,
    getRelationType,
    getImportance,
    keywords: KEYWORDS,
    linkTypes: LINK_TYPES,
    godColorScale: GOD_COLORS,
    godDomain,
    radiusScale,
    fadeScale: FADE_SCALE,
    currentLinks,
    interaction,
    selection,
    keyword,
    linkHighlight
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper" data-name="wrapper-in-state">
  <div class="meta" data-name="meta-in-state"><slot name="meta" /></div>
  <div class="info" data-name="info-in-state">
    <slot name="info" />
  </div>

  <div class="chart-wrapper" bind:clientWidth={$width}>
    <div
      class="chart-centered-container"
      style="width:{$bounds.width}px; height:{$bounds.height}px;"
    >
      {#if $width > 0}
        <svg class="chart-svg" width={$bounds.width} height={$bounds.height}>
          <!-- <rect x={0} y={0} width={$bounds.width} height={$bounds.height} fill="#efefef" /> -->
          <slot name="chart-svg" />
        </svg>
        <div class="chart-html" style="width:{$bounds.width}px; height:{$bounds.height}px;">
          <slot name="chart-html" />
        </div>
        <svg class="chart-svg" width={$bounds.width} height={$bounds.height}>
          <!-- <rect x={0} y={0} width={$bounds.width} height={$bounds.height} fill="#efefef" /> -->
          <slot name="chart-svg-overlay" />
        </svg>
      {/if}
    </div>
  </div>
</div>

<style>
  .wrapper {
    /* background-color: forestgreen; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
      "meta-area"
      "viz-area";

    position: relative;

    /* border: 3px solid green; */
    height: 100vh;

    /* padding-bottom: 1rem; */
  }
  .info {
    position: relative;
    /* background: hotpink; */
    /* border: 2px solid hotpink; */

    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
  .chart-wrapper {
    grid-area: viz-area;
  }
  .chart-centered-container {
    margin: auto;
    position: relative;
  }
  .chart-html,
  .chart-svg {
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .meta {
    grid-area: meta-area;
    /* border: 3px solid Orchid; */
    background-color: var(--color-background-4);
  }
  @media only screen and (min-width: 50em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 64px 1fr;
      grid-template-areas:
        "meta-area meta-area"
        "viz-area info-area";
    }
  }
</style>
