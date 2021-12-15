<script>
  import God from "./God.svelte";
  import { getContext } from "svelte";

  const {
    bounds,
    points,
    getName,
    getRelationType,
    getImportance,
    interaction,
    links,
    radius,
    linkTypeColorScale,
    godTypeColorScale,
    mutableNodes,
    radiusScale,
    mutableLinks
  } = getContext("chart-state");
</script>

<div style="transform: translate({bounds.margins.left}px, {bounds.margins.top}px)">
  <div style="transform: translate({bounds.chartWidth / 2}px, {bounds.chartHeight / 2}px)">
    {#each $mutableNodes as point}
      <God god={point} />
    {/each}
  </div>
</div>
