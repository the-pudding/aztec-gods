<script>
  import links from "$data/gods/tidy/links.json";
  import nodes from "$data/gods/tidy/nodes.json";
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

  let width = writable(0);

  const margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };

  const bounds = derived([width], ([$width]) => ({
    width: $width,
    height: $width,
    margins,
    chartWidth: $width - margins.left - margins.right,
    chartHeight: $width - margins.top - margins.bottom
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

  $: radiusScale = derived([bounds], ([$bounds]) => {
    let base = $bounds.chartWidth * 0.025;
    return scaleOrdinal()
      .domain(TYPE_SCALE)
      .range([base * (GR * 4), base * (GR * 3), base * (GR * 2), base * GR, base]);
  });

  $: currentNodes = writable(nodes);

  // Context
  $: context = {
    bounds,
    nodes: currentNodes,
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
    keyword,
    linkHighlight
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper">
  <div class="chart-wrapper" bind:clientWidth={$width}>
    {#if $width > 0}
      <div class="chart-html" style="width:{$bounds.width}px; height:{$bounds.height}px;">
        <slot name="chart-html" />
      </div>
      <svg class="chart-svg" width={$bounds.width} height={$bounds.height}>
        <!-- <rect x={0} y={0} width={$bounds.width} height={$bounds.height} fill="#efefef" /> -->
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
