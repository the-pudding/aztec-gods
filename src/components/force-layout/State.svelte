<script>
  import {
    extent,
    scaleLinear,
    forceSimulation,
    forceCollide,
    forceLink,
    scaleOrdinal,
    scaleTime,
    schemeCategory10
  } from "d3";
  import { setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import points from "../../data/gods/tidy/gods_details.json";
  import links from "../../data/gods/tidy/relations.json";

  let width = 0;
  const height = 800; //width / 2;

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
  $: linkTypeColorScale = scaleOrdinal()
    .domain([...new Set(links.map((d) => getRelationType(d)))])
    .range(schemeCategory10);

  $: godColorScale = scaleOrdinal()
    .domain(["main", "second", "minor"])
    .range(["#4bc5ca", "#F14057", "#FD9126", "#fbe237"]);

  $: godDomain = [...new Set(points.map((d) => getName(d)))];

  $: radiusScale = scaleOrdinal().domain(["main", "second", "minor"]).range([60, 16, 6]);

  $: keywords = Object.keys(points[0]).slice(2, points.length);
  $: console.log("keywords", keywords);

  // Simulation
  const initialNodes = points.map((d) => ({ ...d }));
  const simulation = forceSimulation(initialNodes);

  const _mutableNodes = writable([]);
  const _mutableLinks = writable([]);

  simulation.on("tick", () => {
    $_mutableNodes = [...simulation.nodes()];
    $_mutableLinks = [...links];
  });

  $: {
    simulation
      .force(
        "collide",
        forceCollide()
          .radius((d) => radiusScale(getImportance(d)) * 0.8)
          .iterations(3)
      )
      .force(
        "link",
        forceLink(links).id((d) => getName(d))
      )
      // .force("bouding-box", () => {
      //   $_mutableNodes.forEach((node) => {
      //     let radius = radiusScale(getImportance(d)) * 0.8;

      //     node.x = Math.max(node.x, bounds.margins.left + radius);
      //     node.x = Math.min(node.x, bounds.chartWidth - radius);
      //     node.y = Math.max(node.y, bounds.margins.top + radius);
      //     node.y = Math.min(node.y, bounds.chartHeight - radius);
      //   });
      // })
      .alpha(1)
      .restart();
  }
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

  // Context
  $: context = {
    bounds,
    getName,
    getRelationType,
    getImportance,
    keywords,
    points,
    links,
    radius: RADIUS,
    linkTypeColorScale,
    godColorScale,
    godDomain,
    radiusScale,
    mutableNodes: _mutableNodes,
    mutableLinks: _mutableLinks,
    interaction,
    keyword
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper">
  <div class="controls"><slot name="controls" /></div>
  <div class="chart-wrapper" bind:clientWidth={width}>
    {#if width > 0}
      <svg class="chart-svg" width={bounds.width} height={bounds.height}>
        <slot name="chart-svg" />
      </svg>
      <div class="chart-html" style="width:{bounds.width}px; height:{bounds.height}px;">
        <slot name="chart-html" />
      </div>
    {/if}
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    margin: 1rem;
    position: relative;
    height: 100vh;
  }

  .chart-html,
  .chart-svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  .controls {
    background: #f4f4f4;
  }
</style>
