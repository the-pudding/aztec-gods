<script>
  import nodes from "$data/gods/tidy/nodes.json";
  import links from "$data/gods/tidy/links.json";
  import {
    FADE_SCALE,
    getImportance,
    getName,
    getRelationType,
    GOD_COLORS,
    KEYWORDS,
    LINK_TYPES,
    RADIUS_SCALE
  } from "$domain/constants.js";
  import { setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import { max, scaleLinear } from "d3";

  let width = writable(0);
  $: console.log($width);
  // $: height = $width / 2;

  // $: center = [$width / 2, $height / 2];
  const margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };

  // $: bounds = {
  //   width,
  //   height,
  //   margins,
  //   center,
  //   chartWidth: width - margins.left - margins.right,
  //   chartHeight: height - margins.top - margins.bottom
  // };
  const bounds = derived([width], ([$width]) => ({
    width: $width,
    height: $width,
    margins,
    chartWidth: $width - margins.left - margins.right,
    chartHeight: $width - margins.top - margins.bottom
  }));

  $: allX = LINK_TYPES.flatMap((type) => nodes.map((d) => d[type].x));
  $: xMax = max(allX, (d) => Math.abs(d));
  $: allY = LINK_TYPES.flatMap((type) => nodes.map((d) => d[type].y));
  $: yMax = max(allY, (d) => Math.abs(d));
  $: allMax = Math.max(xMax, yMax);

  $: xScale = derived([bounds], ([$bounds]) =>
    scaleLinear().domain([-allMax, allMax]).range([0, $bounds.chartWidth])
  );
  $: yScale = derived([bounds], ([$bounds]) =>
    scaleLinear().domain([-allMax, allMax]).range([$bounds.chartHeight, 0])
  );
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

  // Context
  $: context = {
    bounds,
    nodes,
    xScale,
    yScale,
    getName,
    getRelationType,
    getImportance,
    keywords: KEYWORDS,
    linkTypes: LINK_TYPES,
    godColorScale: GOD_COLORS,
    godDomain,
    radiusScale: RADIUS_SCALE,
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
