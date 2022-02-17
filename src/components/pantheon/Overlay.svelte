<script>
  import { Delaunay, pointer } from "d3";
  import { getContext } from "svelte";

  export let noPointerEvents = false;
  export let debug = false;

  let overlay; // ref

  const {
    bounds,
    xScale,
    yScale,
    getName,
    nodes,
    interaction,
    selection,
    currentLinks,
    linkHighlight
  } = getContext("chart-state");

  // Overlay Logic
  $: delaunay = Delaunay.from(
    $nodes,
    (d) => $xScale(d[$linkHighlight].x),
    (d) => $yScale(d[$linkHighlight].y)
  );
  $: voronoi = delaunay.voronoi([0, 0, $bounds.chartWidth, $bounds.chartHeight]);

  // Manage interaction on overlay rectangle
  // const findLocation = (e) => {
  //   const [x, y] = pointer(e, overlay);
  //   const location = delaunay.find(x, y);
  //   const god = $nodes[location];
  //   interaction.highlight(getName(god));
  // };
  // const select = (e) => {
  //   const [x, y] = pointer(e, overlay);
  //   const location = delaunay.find(x, y);
  //   const god = $nodes[location];
  //   selection.highlight(god);
  // };

  // Manage interaction on overlay paths

  $: selectionRelatedGods = [
    ...new Set(
      $currentLinks
        .filter((link) => $selection && getName(link.source) === getName($selection))
        .map((d) => d.target.name)
    )
  ];
</script>

<g data-name="overlay" transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}>
  {#each $nodes as node, i}
    <path
      class:no-event={$selection && !selectionRelatedGods.includes(getName(node))}
      d={voronoi.renderCell(i)}
      fill="hotpink"
      fill-opacity={debug ? 0.2 : 0}
      stroke={debug ? "white" : "none"}
      stroke-opacity={1}
      on:click={() => selection.highlight(node)}
      on:mousemove={() => interaction.highlight(getName(node))}
      on:mouseenter={() => interaction.highlight(getName(node))}
      on:focus={() => interaction.highlight(getName(node))}
      on:mouseout={() => interaction.highlight(undefined)}
      on:blur={() => interaction.highlight(undefined)}
    />
  {/each}
  <!-- <rect
    style="pointer-events: {noPointerEvents ? 'none' : 'auto'}"
    bind:this={overlay}
    fill-opacity={0}
    width={$bounds.chartWidth}
    height={$bounds.chartHeight}
    on:click={select}
    on:mousemove={findLocation}
    on:mouseenter={findLocation}
    on:focus={findLocation}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  /> -->
</g>

<style>
  path {
    cursor: pointer;
  }
  path.no-event {
    pointer-events: none;
  }
  rect {
    /* cursor: url("/aztec-gods/assets/design-elements/pokeball.png") 12 12, auto; */
    cursor: pointer;
  }
</style>
