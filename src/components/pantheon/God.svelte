<script>
  import doc from "$data/doc.json";

  import { getContext } from "svelte";
  import loadImage from "$utils/loadImage";
  import { getLightGodColor, getMainGodColor, getGodImportanceLabel } from "$domain/getters";
  import variables from "$data/variables.json";

  export let god;
  export let activeStep = doc.pantheon[0];

  const dev = process.env.NODE_ENV === "development";

  const FACTOR = 0.75;
  const {
    bounds,
    xScale,
    yScale,
    getName,
    getImportance,
    interaction,
    fadeScale,
    linkHighlight,
    radiusScale,
    currentLinks,
    keyword
  } = getContext("chart-state");

  $: relatedGods = [
    ...new Set(
      $currentLinks
        .filter((link) => getName(link.source) === $interaction)
        .map((d) => d.target.name)
    )
  ];

  $: storyMode = activeStep.id !== "exploratory-mode";
  $: isMain = ["primordial", "creation", "elemental", "human"].includes(getImportance(god));
  $: layoutIsGeom = $linkHighlight === "geometric";
  $: isHidden = layoutIsGeom && !isMain;
  $: name = getName(god);

  $: rad = $radiusScale(getImportance(god));
  $: borderWidth = !isMain ? 0 : rad * 0.07;
  $: bgColor = !isMain ? variables.category.secondary : getLightGodColor(god.importance);
  $: opacity =
    storyMode && isMain
      ? 1
      : !$keyword && !$interaction && layoutIsGeom && isMain
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
  $: blur = `unset`;
  // !storyMode || (storyMode && activeStep.id === "intro")
  //   ? "unset"
  //   : activeStep.id === god.name
  //   ? `unset`
  //   : activeStep.type === god.importance
  //   ? `blur(1px)`
  //   : `blur(4px)`;

  $: isScaled = storyMode && activeStep.id === god.name;

  $: x = $xScale(god[$linkHighlight].x) + $bounds.margins.left;
  $: y = $yScale(god[$linkHighlight].y) + $bounds.margins.top;
</script>

{#if isMain}
  {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${god.name}.png`)}
    <div
      class="god"
      style="width:{isScaled ? $bounds.chartWidth * FACTOR : rad}px; height:{isScaled
        ? $bounds.chartHeight * FACTOR
        : rad}px; 
  left:{x}px; top:{y}px; 
  opacity:{opacity};
  background-color: {bgColor};
  filter: {blur};
  transform: translate(-50%, -50%);
  z-index: {isScaled ? 200 : 20};
  border: {borderWidth}px solid {getMainGodColor(god.importance)};
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
      style="width:{isScaled ? $bounds.chartWidth * FACTOR : rad}px; height:{isScaled
        ? $bounds.chartHeight * FACTOR
        : rad}px; 
  left:{isScaled ? $bounds.chartWidth / 2 + $bounds.margins.left : x}px; top:{isScaled
        ? $bounds.chartHeight / 2 + $bounds.margins.top
        : y}px; 
  background-color: {bgColor};
  filter: {blur};
  transform: translate(-50%, -50%);
  z-index: {isScaled ? 200 : 20};
  border: {borderWidth}px solid {getMainGodColor(god.importance)};
  background-image: {isMain ? `url(${img.src})` : 'unset'};
  opacity:{opacity};
  "
      on:mouseenter={() => interaction.highlight(getName(god))}
      on:focus={() => interaction.highlight(getName(god))}
      on:mouseout={() => interaction.highlight(undefined)}
      on:blur={() => interaction.highlight(undefined)}
    />
  {:catch}
    <div
      class="god"
      style="width:{isScaled ? $bounds.chartWidth * FACTOR : rad}px; height:{isScaled
        ? $bounds.chartHeight * FACTOR
        : rad}px; 
left:{x}px; top:{y}px; 
opacity:{opacity};
background-color: {bgColor};
filter: {blur};
transform: translate(-50%, -50%);
z-index: {isScaled ? 200 : 20};
border: {borderWidth}px solid {getMainGodColor(god.importance)};
"
      on:mouseenter={() => interaction.highlight(getName(god))}
      on:focus={() => interaction.highlight(getName(god))}
      on:mouseout={() => interaction.highlight(undefined)}
      on:blur={() => interaction.highlight(undefined)}
    />
  {/await}
{:else}
  <div
    class="god"
    style="width:{isScaled ? $bounds.chartWidth : rad}px; height:{isScaled
      ? $bounds.chartHeight
      : rad}px; 
left:{x}px; top:{y}px; 
opacity:{opacity};
background-color: {bgColor};
filter: {blur};
transform: translate(-50%, -50%) {isScaled ? 'scale(1.5)' : 'scale(1)'};
z-index: {isScaled ? 200 : 20};
border: {borderWidth}px solid {getMainGodColor(god.importance)};
"
    on:mouseenter={() => interaction.highlight(getName(god))}
    on:focus={() => interaction.highlight(getName(god))}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  />
{/if}

<style>
  .god {
    position: absolute;

    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    transition: opacity 500ms, transform 500ms, border-width 500ms, left 1000ms, top 1000ms,
      width 1000ms, height 1000ms, filter 500ms;
  }
</style>
