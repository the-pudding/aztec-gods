<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";

  const { bounds, nodes } = getContext("chart-state");
</script>

<div style="transform: translate({$bounds.margins.left}px, {$bounds.margins.top}px)">
  {#each $nodes as god}
    <God {god} />
  {/each}
</div>
