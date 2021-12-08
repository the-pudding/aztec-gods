<script>
  import { getContext } from "svelte";

  const { bounds, points, links, radius, linkTypeColorScale, godTypeColorScale } =
    getContext("chart-state");

  import {
    forceSimulation,
    forceX,
    forceY,
    forceManyBody,
    forceCollide,
    forceLink,
    forceCenter
  } from "d3-force";

  const initialNodes = points.map((d) => ({ ...d }));
  const simulation = forceSimulation(initialNodes);

  let mutableNodes = [];
  let mutableLinks = [];

  simulation.on("tick", () => {
    mutableNodes = [...simulation.nodes()];
    mutableLinks = [...links];
  });

  $: {
    simulation
      // .force("x", forceX(bounds.center[0]).strength(0.01))
      // .force("y", forceY(bounds.center[1]).strength(0.01))
      .force(
        "collide",
        forceCollide()
          .radius(radius + 6)
          .iterations(3)
      )
      .force(
        "link",
        forceLink(links).id((d) => d.id)
      )
      .alpha(1)
      .restart();
  }

  $: console.log(bounds);
</script>

<g transform={`translate(${bounds.margins.left}, ${bounds.margins.top})`}>
  <g transform={`translate(${bounds.chartWidth / 2}, ${bounds.chartHeight / 2})`}>
    {#each mutableLinks as link}
      <line
        x1={link.source.x}
        y1={link.source.y}
        x2={link.target.x}
        y2={link.target.y}
        stroke={linkTypeColorScale(link.Type)}
      />
    {/each}
    {#each mutableNodes as point}
      <circle
        r={radius}
        cx={point.x}
        cy={point.y}
        fill="#efefef"
        stroke={godTypeColorScale(point.Type)}
        stroke-width={2}
      />
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
