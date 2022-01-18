<script>
  import God from "./God.svelte";
  import { getContext } from "svelte";

  const { bounds, nodes } = getContext("chart-state");
</script>

<div style="transform: translate({$bounds.margins.left}px, {$bounds.margins.top}px)">
  <!-- <div style="transform: translate({bounds.chartWidth / 2}px, {bounds.chartHeight / 2}px)"> -->
  {#each nodes as god}
    <God {god} />
  {/each}
  <!-- </div> -->
</div>
