<script>
  import { Delaunay, pointer } from "d3";
  import { getContext } from "svelte";

  export let noPointerEvents = false;
  export let debug = false;

  let overlay; // ref

  const { bounds, xScale, yScale, getName, nodes, interaction, linkHighlight } =
    getContext("chart-state");

  // Overlay Logic
  $: delaunay = Delaunay.from(
    nodes,
    (d) => $xScale(d[$linkHighlight].x),
    (d) => $yScale(d[$linkHighlight].y)
  );
  $: voronoi = delaunay.voronoi([0, 0, $bounds.chartWidth, $bounds.chartHeight]);

  // Manage interaction
  const findLocation = (e) => {
    const [x, y] = pointer(e, overlay);
    const location = delaunay.find(x, y);
    const god = nodes[location];
    interaction.highlight(getName(god));
  };
</script>

<g data-name="overlay" transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}>
  {#if debug}
    {#each nodes as p, i}
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
    width={$bounds.chartWidth}
    height={$bounds.chartHeight}
    on:mousemove={findLocation}
    on:mouseenter={findLocation}
    on:focus={findLocation}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  />
</g>

<style>
  rect {
    cursor: url("/aztec-gods/design-elements/pokeball.png") 12 12, auto;
  }
</style>
