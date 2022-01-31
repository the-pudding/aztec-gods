<script>
  import { getContext } from "svelte";

  const { bounds, xScale, yScale, interaction, getName, currentLinks } = getContext("chart-state");
</script>

<g data-name="links" transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}>
  {#each $currentLinks as link}
    <line
      x1={$xScale(link.source.x)}
      y1={$yScale(link.source.y)}
      x2={$xScale(link.target.x)}
      y2={$yScale(link.target.y)}
      stroke="#FE0000"
      stroke-opacity={$interaction && $interaction === getName(link.source) ? 0.3 : 0}
      stroke-width={$interaction && $interaction === getName(link.source) ? 3 : 1}
    />
  {/each}
</g>

<style>
  line {
    transition: opacity 500ms;
  }
</style>
