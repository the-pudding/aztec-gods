<script>
  import doc from "$data/doc.json";

  import { getContext } from "svelte";
  import loadImage from "$utils/loadImage";
  import { getLightGodColor, getMainGodColor } from "$domain/getters";
  import variables from "$data/variables.json";

  export let god;
  export let activeStep = doc.pantheon[0];

  const dev = process.env.NODE_ENV === "development";
  $: promise = loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${god.name}.png`);

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
  $: borderWidth = !isMain ? 0 : 6;
  $: bgColor = !isMain ? variables.category.secondary : getLightGodColor(god.importance);
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
  $: blur = !storyMode
    ? "unset"
    : activeStep.id === god.name
    ? `unset`
    : activeStep.type === god.importance
    ? `blur(1px)`
    : `blur(4px)`;
</script>

{#await promise}
  <div
    class="god"
    style="width:{rad}px; height:{rad}px; 
  left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
  opacity:{opacity};
  background-color: {bgColor};
  filter: {blur};
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
    style="width:{rad}px; height:{rad}px; 
  left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
  background-color: {bgColor};
  filter: {blur};
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
    style="width:{rad}px; height:{rad}px; 
left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
opacity:{opacity};
background-color: {bgColor};
filter: {blur};
border: {borderWidth}px solid {getMainGodColor(god.importance)};
"
    on:mouseenter={() => interaction.highlight(getName(god))}
    on:focus={() => interaction.highlight(getName(god))}
    on:mouseout={() => interaction.highlight(undefined)}
    on:blur={() => interaction.highlight(undefined)}
  />
{/await}

{#if storyMode && activeStep.id === name}
  <div
    class="name"
    style="left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(
      god[$linkHighlight].y
    )}px; color: {getMainGodColor(god.importance)}; transform: translate(-50%, -11px);"
  >
    {name}
  </div>
{/if}

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
    transition: opacity 200ms, left 700ms, top 700ms, width 700ms, height 700ms, filter 200ms;
  }
  .name {
    font-size: 0.6em;
    font-weight: 700;
    letter-spacing: 0.03em;
    position: absolute;
    transform: translateX(-50%);
    text-transform: uppercase;
  }
</style>
