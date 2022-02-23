<script>
  import doc from "$data/doc.json";

  import { getContext } from "svelte";
  import loadImage from "$utils/loadImage";
  import { getMainGodColor } from "$domain/getters";
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
    selection,
    linkHighlight,
    radiusScale,
    currentLinks
  } = getContext("chart-state");

  $: selectionRelatedGods = [
    ...new Set(
      $currentLinks
        .filter((link) => $selection && getName(link.source) === getName($selection))
        .map((d) => d.target.name)
    )
  ];
  $: highlightRelatedGods = [
    ...new Set(
      $currentLinks
        .filter((link) => $interaction && getName(link.source) === $interaction)
        .map((d) => d.target.name)
    )
  ];

  // Steps
  $: explanatoryMode = activeStep.type === "explanatory-mode";
  $: exploratoryMode = activeStep.type === "exploratory-mode";
  $: storyMode = explanatoryMode == exploratoryMode;

  // God parameters
  $: isMain = ["primordial", "creation", "elemental", "human"].includes(getImportance(god));

  // Interaction Parameters
  // Highlight = hover
  // Selection = selected
  $: highlightExists = $interaction !== undefined;
  $: isHighlighted = highlightExists && $interaction === god.name;
  $: isHighlightRelated = highlightExists && highlightRelatedGods.includes(god.name);
  $: isBigger = $selection && isHighlighted;

  $: selectionExists = $selection !== undefined;
  $: isSelected = selectionExists && getName($selection) === god.name;
  $: isSelectionRelated = selectionExists && selectionRelatedGods.includes(god.name);
  $: isRelated = isHighlightRelated || isSelectionRelated;
  const getOpacity = (
    storyMode,
    isMain,
    selectionExists,
    isSelected,
    isRelated,
    highlightExists,
    isHighlighted
  ) => {
    if (storyMode && isMain) {
      return 1;
    } else if (!storyMode && !selectionExists && !highlightExists) {
      // No interaction
      return 1;
    } else if (!storyMode && (isSelected || isRelated || isHighlighted)) {
      return 1;
    } else if (!storyMode && !isSelected) {
      return 0.1;
    } else {
      return 0;
    }
  };
  $: opacity = getOpacity(
    storyMode,
    isMain,
    selectionExists,
    isSelected,
    isRelated,
    highlightExists,
    isHighlighted
  );

  // Geometric parameters
  $: rad = $radiusScale(getImportance(god));
  $: borderWidth = !isMain ? 0 : rad * 0.07;
  $: color =
    selectionExists && (isSelected || isSelectionRelated)
      ? variables.color.secondary
      : !isMain
      ? variables.category.secondary
      : getMainGodColor(god.importance);

  $: x = $xScale(god[$linkHighlight].x) + $bounds.margins.left;
  $: y = $yScale(god[$linkHighlight].y) + $bounds.margins.top;

  const biggerSize = 70;
</script>

<div
  class="god"
  style="width:{isBigger ? biggerSize : rad}px; height:{isBigger ? biggerSize : rad}px; 
  left:{x}px; top:{y}px; 
  background-color: {isBigger || isSelected || (isMain && isSelectionRelated)
    ? variables.color.white
    : color};
  transform: translate(-50%, -50%);
  z-index: {isBigger ? 200 : 20};
  border: {borderWidth}px solid {color};
  opacity:{opacity};
  "
>
  {#if isMain || isBigger || isSelected}
    {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${god.id.toLowerCase()}.svg`)}
      <span />
    {:then img}
      <img src={img.src} alt={god.id} />
    {:catch}
      <span>No image</span>
    {/await}
  {/if}
</div>

<!-- background-color: {!isMain && !isBigger && !isSelected ? color : variables.color.white}; -->
<style>
  .god {
    position: absolute;

    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    transition: opacity 500ms, transform 500ms, border-width 500ms, left 500ms, top 500ms,
      width 500ms, height 500ms;

    pointer-events: none;
  }
</style>
