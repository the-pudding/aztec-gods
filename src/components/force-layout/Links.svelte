<script>
  import { getContext } from "svelte";

  const { bounds, interaction, getName, currentLinks } = getContext("chart-state");
</script>

<g data-name="links" transform={`translate(${bounds.margins.left}, ${bounds.margins.top})`}>
  <g transform={`translate(${bounds.chartWidth / 2}, ${bounds.chartHeight / 2})`}>
    {#each $currentLinks as link}
      <line
        x1={link.source.x}
        y1={link.source.y}
        x2={link.target.x}
        y2={link.target.y}
        stroke="#FE0000"
        stroke-opacity={$interaction && $interaction === getName(link.source) ? 0.3 : 0}
        stroke-width={$interaction && $interaction === getName(link.source) ? 3 : 1}
      />
    {/each}
  </g>
</g>

<style>
  line {
    transition: opacity 200ms;
  }
</style>
