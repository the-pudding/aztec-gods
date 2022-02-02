<script>
  import { getContext } from "svelte";
  import God from "./God2.svelte";
  import doc from "$data/doc.json";

  export let activeStep = doc.pantheon[0];

  const { bounds, nodes } = getContext("chart-state");
</script>

<!-- style="transform: translate({$bounds.margins.left}px, {$bounds.margins.top}px)" -->
<div data-name="gods">
  {#each $nodes as god}
    <God {god} {activeStep} />
  {/each}
</div>
