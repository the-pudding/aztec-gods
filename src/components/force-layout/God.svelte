<script>
  import { getContext } from "svelte";

  export let god;

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
    mutableLinks,
    keyword
  } = getContext("chart-state");

  $: rad = radiusScale(getImportance(god));
  $: name = getName(god);
  $: color = godColorScale(getImportance(god));
  $: isMain = ["primordial", "creation", "elemental", "human"].includes(getImportance(god));

  $: keywordHighlight = god[$keyword] >= 1;
  $: opacity = $keyword && !keywordHighlight ? 0.1 : 1;
</script>

<div
  class="god"
  style="width:{rad}px; height:{rad}px; left:{god.x}px; top:{god.y}px; border: {isMain
    ? 6
    : 0}px solid {color}; 
    background-color: {isMain ? 'none' : color};
    opacity:{opacity};
background-image: url('/aztec-gods/img/{name}.jpg');
    "
  on:mouseenter={() => interaction.highlight(getName(god))}
  on:focus={() => interaction.highlight(getName(god))}
  on:mouseout={() => interaction.highlight(undefined)}
  on:blur={() => interaction.highlight(undefined)}
>
  {isMain ? name : ""}
</div>

<!-- $interaction &&
  $interaction === name
    ? 8
    : 6 -->
<style>
  .god {
    background: #fff;
    font-size: 8px;

    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
</style>
