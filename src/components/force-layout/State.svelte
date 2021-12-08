<script>
  import {
    extent,
    forceSimulation,
    scaleLinear,
    scaleOrdinal,
    scaleTime,
    schemeCategory10
  } from "d3";
  import { setContext } from "svelte";
  // import { derived, writable } from "svelte/store";
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

  $: context = {
    bounds,
    points,
    links,
    radius: RADIUS,
    linkTypeColorScale,
    godTypeColorScale
  };
  $: setContext("chart-state", context);
</script>

<div bind:clientWidth={width}>
  {#if width > 0}
    <svg {width} height={bounds.height}>
      <slot />
    </svg>
  {/if}
</div>
