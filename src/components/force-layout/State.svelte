<script>
  import {
    extent,
    scaleLinear,
    forceSimulation,
    forceCollide,
    forceLink,
    scaleOrdinal,
    scaleTime,
    schemeCategory10,
    forceCenter,
    quadtree
  } from "d3";
  import { setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import points from "../../data/gods/tidy/gods.json";
  import layouts from "../../data/gods/tidy/layouts.json";
  import links from "../../data/gods/tidy/relations.json";

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
  // $: typeScale = [...new Set(points.map((d) => getImportance(d)))];

  $: linkTypeColorScale = scaleOrdinal()
    .domain([...new Set(links.map((d) => getRelationType(d)))])
    .range(schemeCategory10);

  $: godColorScale = scaleOrdinal()
    .domain(typeScale)
    .range(["#008AA1", "#D28360", "#5C8A73", "#B08699", "#FE0000"]);

  $: godDomain = [...new Set(points.map((d) => getName(d)))];

  const base = 20;
  const gr = 1.62;
  $: radiusScale = scaleOrdinal()
    .domain(typeScale)
    .range([base * (gr * 4), base * (gr * 3), base * (gr * 2), base * gr, base]);

  $: keywords = Object.keys(points[0]).slice(2, points.length);
  // $: console.log(keywords);
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

  // Simulation
  // $: initialLinks = links.filter((link) =>
  //   $linkHighlight ? getRelationType(link) === $linkHighlight : true
  // );
  // const initialNodes = points.map((d) => ({ ...d }));
  // const simulation = forceSimulation(initialNodes);

  // const _mutableNodes = writable([]);
  // const _mutableLinks = writable([]);

  // simulation.on("tick", () => {
  //   $_mutableNodes = [...simulation.nodes()];
  //   $_mutableLinks = [...initialLinks];
  // });

  // $: {
  //   simulation
  //     .force("collide", rectCollide())
  //     // .force(
  //     //   "collide",
  //     //   forceCollide()
  //     //     .radius((d) => radiusScale(getImportance(d)) * 0.8)
  //     //     .iterations(3)
  //     // )
  //     .force(
  //       "link",
  //       forceLink(initialLinks).id((d) => getName(d))
  //       // .distance((d) => (getRelationType(d) === "authority" ? 30 : 10))
  //     )
  //     .force("center", forceCenter())
  //     .alpha(1)
  //     .restart();
  // }

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
    fadeScale,
    layouts,
    // mutableLinks: _mutableLinks,
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
