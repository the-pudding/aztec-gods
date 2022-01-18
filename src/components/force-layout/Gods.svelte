<script>
  import God from "./God.svelte";
  import { getContext } from "svelte";

  const {
    bounds,
    points,
    layouts,
    getName,
    getRelationType,
    getImportance,
    interaction,
    links,
    radius,
    linkTypeColorScale,
    godColorScale,
    mutableNodes,
    radiusScale,
    mutableLinks
  } = getContext("chart-state");
</script>

<div style="transform: translate({bounds.margins.left}px, {bounds.margins.top}px)">
  <div style="transform: translate({bounds.chartWidth / 2}px, {bounds.chartHeight / 2}px)">
    {#each layouts as point}
      <God god={point} />
    {/each}
  </div>
</div>
