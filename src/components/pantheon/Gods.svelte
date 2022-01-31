<script>
  import { getContext } from "svelte";
  import God from "./God.svelte";
  import doc from "$data/doc.json";

  export let activeStep = doc.pantheon[0];

  const { bounds, nodes } = getContext("chart-state");
</script>

<div style="transform: translate({$bounds.margins.left}px, {$bounds.margins.top}px)">
  {#each $nodes as god}
    <God {god} {activeStep} />
  {/each}
</div>
