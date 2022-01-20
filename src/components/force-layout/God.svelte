<script>
  import { getContext } from "svelte";
  export let god;
  import loadImage from "$utils/loadImage";

  $: promise = loadImage(`/assets/gods/${god.name}.png`);

  const {
    xScale,
    yScale,
    getName,
    getImportance,
    interaction,
    fadeScale,
    godColorScale,
    linkHighlight,
    radiusScale,
    currentLinks,
    keyword
  } = getContext("chart-state");

  $: rad = $radiusScale(getImportance(god));

  $: name = getName(god);
  $: color = godColorScale(getImportance(god));
  $: isMain = ["primordial", "creation", "elemental", "human"].includes(getImportance(god));

  // $: keywordHighlight = god[$keyword] >= 1;
  $: relatedGods = [
    ...new Set(
      $currentLinks
        .filter((link) => getName(link.source) === $interaction)
        .map((d) => d.target.name)
    )
  ];

  $: layoutIsGeom = $linkHighlight === "geometric";
  $: isHidden = layoutIsGeom && !isMain;
  $: opacity =
    !$keyword && !$interaction && layoutIsGeom && isMain
      ? 1
      : isHidden
      ? 0
      : !$keyword && !$interaction
      ? 1
      : $keyword && !$interaction
      ? fadeScale(god[$keyword])
      : ($interaction && $interaction === name) || relatedGods.includes(name)
      ? 1
      : 0.1;
  // $: opacity =
  //   !$keyword && !$interaction
  //     ? 1
  //     : $keyword && !$interaction
  //     ? fadeScale(god[$keyword])
  //     : ($interaction && $interaction === name) || relatedGods.includes(name)
  //     ? 1
  //     : 0.1;
</script>

{#await promise}
  <div
    class="god"
    style="width:{rad}px; height:{rad}px; 
  left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
  background-color: {isMain ? 'transparent' : color};
  opacity:{opacity};

  "
    on:mouseenter={() => interaction.highlight(getName(god))}
    on:focus={() => interaction.highlight(getName(god))}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  >
    {isMain ? name : ""}
  </div>
{:then img}
  <div
    class="god"
    style="width:{rad}px; height:{rad}px; 
  left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
  background-color: {isMain ? 'transparent' : color};
  background-image: {isMain ? `url(${img.src})` : 'unset'};
  opacity:{opacity};

  "
    on:mouseenter={() => interaction.highlight(getName(god))}
    on:focus={() => interaction.highlight(getName(god))}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  >
    <!-- {isMain ? name : ""} -->
  </div>
{:catch error}
  <div
    class="god"
    style="width:{rad}px; height:{rad}px; 
left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
background-color: {isMain ? 'transparent' : color};
opacity:{opacity};

"
    on:mouseenter={() => interaction.highlight(getName(god))}
    on:focus={() => interaction.highlight(getName(god))}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  >
    {isMain ? name : ""}
  </div>
{/await}
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
    transition: opacity 200ms, left 700ms, top 700ms, width 700ms, height 700ms;
  }
</style>
