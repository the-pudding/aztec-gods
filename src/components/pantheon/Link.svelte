<script>
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import variables from "$data/variables.json";
  const { bounds, xScale, yScale, interaction, selection, getName, currentLinks } =
    getContext("chart-state");

  export let link;

  $: isSelected = $selection && getName($selection) === getName(link.source);
</script>

<!-- in:fade={{ delay: 700, duration: 300 }}
out:fade={{ duration: 100 }} -->
<line
  x1={$xScale(link.source.x)}
  y1={$yScale(link.source.y)}
  x2={$xScale(link.target.x)}
  y2={$yScale(link.target.y)}
  stroke={isSelected ? variables.color.secondary : variables.color.highlight}
  stroke-width={isSelected ? 2 : 2}
  stroke-opacity={isSelected ? 1 : 0.1}
/>

<!-- stroke-opacity={isSelected || ($interaction && $interaction === getName(link.source)) ? 1 : 0} -->
<style>
  line {
    transition: stroke-opacity 200ms;
    mix-blend-mode: multiply;
  }
</style>
