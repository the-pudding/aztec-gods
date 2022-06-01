<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";

  const { nodes } = getContext("chart-state");
</script>

<div data-name="gods">
  {#each $nodes as god, i}
    <God {god} godIndex={i} />
  {/each}
</div>
