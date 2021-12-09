<script>
  import { getContext } from "svelte";

  const {
    bounds,
    points,
    interaction,
    links,
    radius,
    linkTypeColorScale,
    godTypeColorScale,
    mutableNodes,
    mutableLinks
  } = getContext("chart-state");
</script>

<g transform={`translate(${bounds.margins.left}, ${bounds.margins.top})`}>
  <g transform={`translate(${bounds.chartWidth / 2}, ${bounds.chartHeight / 2})`}>
    {#each $mutableLinks as link}
      <line
        x1={link.source.x}
        y1={link.source.y}
        x2={link.target.x}
        y2={link.target.y}
        stroke={linkTypeColorScale(link.Type)}
        stroke-width={$interaction &&
        ($interaction === link.source.id || $interaction === link.target.id)
          ? 3
          : 1}
      />
    {/each}
    {#each $mutableNodes as point}
      <g transform={`translate(${point.x}, ${point.y})`}>
        <circle
          r={radius}
          cx={0}
          cy={0}
          fill={$interaction && $interaction === point.id
            ? godTypeColorScale(point.Type)
            : "#efefef"}
          stroke={godTypeColorScale(point.Type)}
          stroke-width={2}
        />
        <image x={0} y={0} href="../../img/Quetzalcoatl.jpg" height={radius} width={radius} />
      </g>
      <text x={point.x} y={point.y} dominant-baseline="middle">{point.id}</text>
    {/each}
  </g>
</g>

<style>
  text {
    text-anchor: middle;
    font-size: 10px;
  }
</style>
