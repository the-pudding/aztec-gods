<script>
  import { getContext } from "svelte";

  export let god;

  const {
    bounds,
    points,
    getName,
    getRelationType,
    layouts,
    getImportance,
    interaction,
    links,
    radius,
    fadeScale,
    linkTypeColorScale,
    godColorScale,
    mutableNodes,
    linkHighlight,
    radiusScale,
    mutableLinks,
    keyword
  } = getContext("chart-state");

  $: rad = radiusScale(getImportance(god));
  $: name = getName(god);
  $: color = godColorScale(getImportance(god));
  $: isMain = ["primordial", "creation", "elemental", "human"].includes(getImportance(god));

  $: keywordHighlight = god[$keyword] >= 1;
  // $: relatedGods = [
  //   ...new Set(
  //     layouts.filter((link) => getName(link.source) === $interaction).map((d) => d.target.name)
  //   )
  // ];

  // $: opacity =
  //   !$interaction || ($interaction && ($interaction === name || relatedGods.includes(name)))
  //     ? 1
  //     : 0.1;
  // $: opacity = $keyword && !keywordHighlight ? 0.1 : 1;
  $: opacity =
    !$keyword && !$interaction
      ? 1
      : $keyword && !$interaction
      ? fadeScale(god[$keyword])
      : $interaction && $interaction === name //|| relatedGods.includes(name)
      ? 1
      : 0.1;
</script>

<div
  class="god"
  style="width:{rad}px; height:{rad}px; left:{god[$linkHighlight].x}px; top:{god[$linkHighlight]
    .y}px; 
  background-color: {isMain ? 'transparent' : color};
  background-image: {isMain ? `url('/aztec-gods/img/${name}.png')` : 'unset'};
  opacity:{opacity};
  "
  on:mouseenter={() => interaction.highlight(getName(god))}
  on:focus={() => interaction.highlight(getName(god))}
  on:mouseout={() => interaction.highlight(undefined)}
  on:blur={() => interaction.highlight(undefined)}
>
  {isMain ? name : ""}
</div>
<!-- border: {isMain ? 6 : 0}px solid {color}; -->

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
    transition: opacity 200ms, left 700ms, top 700ms;
  }
</style>
