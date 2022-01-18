<script>
  import { Delaunay, pointer, style } from "d3";
  import { getContext } from "svelte";
  export let noPointerEvents = false;
  let overlay; // ref
  export let debug = false;
  const {
    bounds,
    points,
    getName,
    getRelationType,
    getImportance,
    interaction,
    links,
    radius,
    linkTypeColorScale,
    godColorScale,
    mutableNodes,
    radiusScale,
    mutableLinks
  } = getContext("chart-state");

  // Overlay Logic
  $: delaunay = Delaunay.from(
    $mutableNodes,
    (d) => d.x + bounds.chartWidth / 2,
    (d) => d.y + bounds.chartHeight / 2
  );
  $: voronoi = delaunay.voronoi([0, 0, bounds.chartWidth, bounds.chartHeight]);

  // Manage interaction
  const findLocation = (e) => {
    const [x, y] = pointer(e, overlay);
    const location = delaunay.find(x, y);
    const god = $mutableNodes[location];
    interaction.highlight(getName(god));
  };
</script>

<g data-name="overlay" transform={`translate(${bounds.margins.left}, ${bounds.margins.top})`}>
  <!-- <g transform={`translate(${bounds.chartWidth / 2}, ${bounds.chartHeight / 2})`}> -->
  {#if debug}
    {#each $mutableNodes as p, i}
      <path
        d={voronoi.renderCell(i)}
        fill="hotpink"
        fill-opacity={0.2}
        stroke="white"
        stroke-opacity={1}
      />
    {/each}
  {/if}
  <rect
    style="pointer-events: {noPointerEvents ? 'none' : 'auto'}"
    bind:this={overlay}
    fill-opacity={0}
    width={bounds.chartWidth}
    height={bounds.chartHeight}
    on:mousemove={findLocation}
    on:mouseenter={findLocation}
    on:focus={findLocation}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  />
  <!-- </g> -->
</g>
<!-- <div style="transform: translate({bounds.margins.left}px, {bounds.margins.top}px)">
      <div style="transform: translate({bounds.chartWidth / 2}px, {bounds.chartHeight / 2}px)">
        {#each $mutableNodes as point}
        <God god={point} />
        {/each}
      </div>
    </div>
     -->

<!-- on:mouseout={hideTooltip}
    on:blur={hideTooltip} -->
<style>
  rect {
    cursor: url("/static/design-elements/pokeball.png") 12 12, auto;
  }
</style>
