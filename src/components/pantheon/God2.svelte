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
    selection,
    fadeScale,
    linkHighlight,
    radiusScale,
    currentLinks,
    keyword
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
  $: isFullWidth = storyMode && activeStep.id === god.name;

  // Interaction Parameters

  $: highlightExists = $interaction !== undefined;
  $: isHighlighted = highlightExists && $interaction === god.name;

  $: selectionExists = $selection !== undefined;
  $: isSelected = selectionExists && getName($selection) === god.name;

  $: isRelated =
    (selectionExists && selectionRelatedGods.includes(god.name)) ||
    (highlightExists && highlightRelatedGods.includes(god.name));

  const getOpacity = (
    storyMode,
    isMain,
    selectionExists,
    isSelected,
    isRelated,
    highlightExists,
    isHighlighted
  ) => {
    // console.log(selection);
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
  $: bgColor = !isMain ? variables.category.secondary : "white"; // getLightGodColor(god.importance);

  $: x = $xScale(god[$linkHighlight].x) + $bounds.margins.left;
  $: y = $yScale(god[$linkHighlight].y) + $bounds.margins.top;
</script>

<div
  class="god"
  style="width:{isFullWidth ? $bounds.chartWidth * FACTOR : rad}px; height:{isFullWidth
    ? $bounds.chartHeight * FACTOR
    : rad}px; 
  left:{isFullWidth ? $bounds.chartWidth / 2 + $bounds.margins.left : x}px; top:{isFullWidth
    ? $bounds.chartHeight / 2 + $bounds.margins.top
    : y}px; 
  background-color: {bgColor};
  transform: translate(-50%, -50%) {isHighlighted ? `scale(1.3)` : `scale(1)`};
  z-index: {isFullWidth ? 200 : 20};
  border: {borderWidth}px solid {getMainGodColor(god.importance)};
  opacity:{opacity};
  "
/>

<!-- background-image: {isMain ? `url(${img.src})` : 'unset'}; -->
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

    pointer-events: none;
  }
</style>
