<script>
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import variables from "$data/variables.json";
  const { bounds, xScale, yScale, interaction, selection, getName, currentLinks } =
    getContext("chart-state");
</script>

<g
  in:fade
  data-name="links"
  transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}
>
  {#each $currentLinks as link}
    <line
      x1={$xScale(link.source.x)}
      y1={$yScale(link.source.y)}
      x2={$xScale(link.target.x)}
      y2={$yScale(link.target.y)}
      stroke={$selection && getName($selection) === getName(link.source)
        ? variables.color.secondary
        : variables.color.highlight}
      stroke-opacity={($selection && getName($selection) === getName(link.source)) ||
      ($interaction && $interaction === getName(link.source))
        ? 1
        : 0}
      stroke-width={$selection && getName($selection) === getName(link.source) ? 2 : 2}
    />
  {/each}
</g>

<style>
  line,
  g {
    transition: stroke-opacity 500ms, x1 500ms, x2 500ms, y1 500ms, y2 500ms;
  }
</style>
