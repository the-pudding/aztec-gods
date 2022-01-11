<script>
  import { getContext } from "svelte";

  const {
    bounds,
    points,
    interaction,
    getName,
    getRelationType,
    links,
    radius,
    linkTypeColorScale,
    godColorScale,
    mutableNodes,
    mutableLinks,
    keyword
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
        stroke="#CA4E46"
        stroke-opacity={$interaction && $interaction === getName(link.source) ? 0.3 : 0}
        stroke-width={$interaction && $interaction === getName(link.source) ? 3 : 1}
      />
    {/each}
    <!-- stroke={linkTypeColorScale(getRelationType(link))} -->
    <!-- {#each $mutableNodes as point}
      <g transform={`translate(${point.x}, ${point.y})`}>
        <circle
          r={radius}
          cx={0}
          cy={0}
          fill={$interaction && $interaction === point.id
            ? godColorScale(point.Type)
            : "#efefef"}
          stroke={godColorScale(point.Type)}
          stroke-width={2}
        />
        <image x={0} y={0} href="../../img/Quetzalcoatl.jpg" height={radius} width={radius} />
      </g>
      <text x={point.x} y={point.y} dominant-baseline="middle">{point.id}</text>
    {/each} -->
  </g>
</g>
