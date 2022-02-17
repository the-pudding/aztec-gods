<script>
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import variables from "$data/variables.json";
  const { bounds, xScale, yScale, interaction, selection, getName, currentLinks } =
    getContext("chart-state");

  export let link;
</script>

<line
  in:fade={{ delay: 700, duration: 300 }}
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
