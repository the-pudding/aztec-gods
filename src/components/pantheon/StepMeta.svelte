<script>
  import { getContext } from "svelte";
  import Controls from "$components/pantheon/Controls.svelte";
  import doc from "$data/doc.json";
  import loadImage from "$utils/loadImage";
  import { getLightGodColor, getMainGodColor, getGodImportanceLabel } from "$domain/getters";

  export let activeStep = doc.pantheon[0];

  $: storyMode = activeStep.id !== "exploratory-mode";

  const dev = process.env.NODE_ENV === "development";
  $: promise = loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${activeStep.id}.png`);
</script>

{#if !storyMode}
  <Controls />
{/if}
