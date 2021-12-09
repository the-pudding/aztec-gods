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

<div style="transform: translate({bounds.margins.left}px, {bounds.margins.top}px)">
  <div style="transform: translate({bounds.chartWidth / 2}px, {bounds.chartHeight / 2}px)">
    {#each $mutableNodes as point}
      <div
        class="god"
        style="width:{radius * 2}px; height:{radius *
          2}px; left:{point.x}px; top:{point.y}px; border: {$interaction &&
        $interaction === point.id
          ? 4
          : 1}px solid {godTypeColorScale(
          point.Type
        )}; background-image: url('../../img/{point.id}.jpg'); 
        "
      >
        {point.id}
      </div>
    {/each}
  </div>
</div>

<!-- background:{$interaction &&
  $interaction === point.id
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
