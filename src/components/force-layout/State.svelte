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

  $: linkTypeColorScale = scaleOrdinal()
    .domain([...new Set(links.map((d) => d.Type))])
    .range(schemeCategory10);

  $: godTypeColorScale = scaleOrdinal()
    .domain([...new Set(points.map((d) => d.Type))])
    .range(["#4bc5ca", "#F14057", "#FD9126", "#fbe237"]);

  $: godDomain = [...new Set(points.map((d) => d.id))];

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
          .radius(RADIUS + 6)
          .iterations(3)
      )
      .force(
        "link",
        forceLink(links).id((d) => d.id)
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
    points,
    links,
    radius: RADIUS,
    linkTypeColorScale,
    godTypeColorScale,
    godDomain,
    mutableNodes: _mutableNodes,
    mutableLinks: _mutableLinks,
    interaction
  };
  $: setContext("chart-state", context);
</script>

<div class="wrapper">
  <div class="chart-wrapper" bind:clientWidth={width}>
    {#if width > 0}
      <svg {width} height={bounds.height}>
        <slot name="svg" />
      </svg>
      <div class="chart-html" {width} height={bounds.height} />
    {/if}
  </div>
  <div class="controls"><slot name="controls" /></div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 1rem;
  }

  .chart-html {
    position: absolute;
    top: 0;
    left: 0;
  }
  .controls {
    background: #f4f4f4;
  }
</style>
