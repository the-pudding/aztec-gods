<script>
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import variables from "$data/variables.json";
  const { bounds, xScale, yScale, interaction, selection, getName, currentLinks } =
    getContext("chart-state");

  export let link;
</script>

<line
  in:fade={{ delay: 500, duration: 500 }}
  out:fade={{ duration: 100 }}
  x1={$xScale(link.source.x)}
  y1={$yScale(link.source.y)}
  x2={$xScale(link.target.x)}
  y2={$yScale(link.target.y)}
  stroke={$selection && getName($selection) === getName(link.source)
    ? variables.color.secondary
    : variables.color.highlight}
  stroke-width={$selection && getName($selection) === getName(link.source) ? 2 : 2}
  stroke-opacity={($selection && getName($selection) === getName(link.source)) ||
  ($interaction && $interaction === getName(link.source))
    ? 1
    : 0}
/>

<style>
  line,
  g {
    /* transition: stroke-opacity 500ms, x1 500ms, x2 500ms, y1 500ms, y2 500ms; */
  }
</style>
