<script>
  import { getContext } from "svelte";

  const {
    bounds,
    points,
    getName,
    getRelationType,
    interaction,
    links,
    radius,
    linkTypeColorScale,
    godTypeColorScale,
    mutableNodes,
    mutableLinks
  } = getContext("chart-state");
</script>

<div style="transform: translate({bounds.margins.left}px, {bounds.margins.top}px)">
  <div style="transform: translate({bounds.chartWidth / 2}px, {bounds.chartHeight / 2}px)">
    {#each $mutableNodes as point}
      <div
        class="god"
        style="width:{radius * 2}px; height:{radius *
          2}px; left:{point.x}px; top:{point.y}px; border: {$interaction &&
        $interaction === getName(point)
          ? 4
          : 1}px solid {godTypeColorScale(
          getRelationType(point)
        )}; background-image: url('/img/{getName(point)}.jpg'); 
        "
      >
        {getName(point)}
      </div>
    {/each}
  </div>
</div>

<!-- background:{$interaction &&
  $interaction === getName(point)
    ? godTypeColorScale(point.Type)
    : '#efefef'}; -->
<style>
  .god {
    background: aliceblue;
    font-size: 8px;

    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
</style>
