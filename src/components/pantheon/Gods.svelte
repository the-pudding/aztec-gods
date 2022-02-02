<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";
  import doc from "$data/doc.json";

  export let activeStep = doc.pantheon[0];

  const { nodes } = getContext("chart-state");
</script>

<div data-name="gods">
  {#each $nodes as god}
    <God {god} {activeStep} />
  {/each}
</div>
