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
  import points from "../../data/gods/tidy/gods.json";
  import links from "../../data/gods/tidy/relations.json";

  let width = 0;
  const height = 500; //width / 2;

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

  $: godTypeColorScale = scaleOrdinal()
    .domain([...new Set(points.map((d) => getRelationType(d)))])
    .range(["#4bc5ca", "#F14057", "#FD9126", "#fbe237"]);

  $: godDomain = [...new Set(points.map((d) => getName(d)))];

  $: radiusScale = scaleOrdinal().domain(["main", "second", "minor"]).range([50, 10, 4]);

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
          .radius((d) => radiusScale(getImportance(d)))
          .iterations(3)
      )
      .force(
        "link",
        forceLink(links).id((d) => getName(d))
      )
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

  // Context
  $: context = {
    bounds,
    getName,
    getRelationType,
    getImportance,
    points,
    links,
    radius: RADIUS,
    linkTypeColorScale,
    godTypeColorScale,
    godDomain,
    radiusScale,
    mutableNodes: _mutableNodes,
    mutableLinks: _mutableLinks,
    interaction
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper">
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
  <div class="controls"><slot name="controls" /></div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 1rem;
    position: relative;
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
