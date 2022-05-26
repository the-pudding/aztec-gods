<script>
  import { getContext } from "svelte";
  import loadImage from "$utils/loadImage";
  import { getMainGodColor } from "$domain/getters";
  import variables from "$data/variables.json";

  export let god;

  const dev = process.env.NODE_ENV === "development";

  const {
    bounds,
    xScale,
    yScale,
    getName,
    getImportance,
    interaction,
    selection,
    radiusScale,
    keyword
  } = getContext("chart-state");

  // Interaction Parameters
  // Highlight = hover
  // Selection = selected
  $: highlightExists = $interaction !== undefined;
  $: isHighlighted = highlightExists && $interaction === god.name;

  $: selectionExists = $selection !== undefined;
  $: isSelected = selectionExists && getName($selection) === god.name;

  $: fieldIsSelected = god[$keyword] === 1;

  $: opacity = $keyword && !fieldIsSelected && !isHighlighted && !isSelected ? 0.1 : 1;
  // Geometric parameters
  $: rad = $radiusScale(getImportance(god));

  $: borderWidth = rad * 0.01; // isSelected ? rad * 0.1 : rad * 0.07;

  $: borderColor = isSelected || isHighlighted ? "black" : variables.category.secondary;
  $: color = getMainGodColor(god.importance);
  $: backgroundColor = isSelected ? "black" : isHighlighted ? variables.color["gray-light"] : color;

  $: x = $xScale(god.x) + $bounds.margins.left;
  $: y = $yScale(god.y) + $bounds.margins.top;

  // const biggerSize = 70;
</script>

<div
  class="god"
  style="width:{rad}px; height:{rad}px; 
  left:{x}px; top:{y}px; 
  background-color: {backgroundColor};
  transform: translate(-100%, -100%);
  z-index: {isHighlighted ? 20 : 10};
  border: {borderWidth}px solid {borderColor};
  opacity:{opacity};
  "
>
  {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${god.id.toLowerCase()}.svg`)}
    <span />
  {:then img}
    <img src={img.src} alt={god.id} />
  {:catch}
    <span>No image</span>
  {/await}
</div>

<style>
  .god {
    position: absolute;

    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    pointer-events: none;
  }
</style>
