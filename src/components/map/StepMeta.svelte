<script>
  import { getContext } from "svelte";
  import Controls from "$components/force-layout/Controls.svelte";
  import doc from "$data/doc.json";
  import loadImage from "$utils/loadImage";
  import { getLightGodColor, getMainGodColor, getGodImportanceLabel } from "$domain/getters";

  export let activeStep = doc.pantheon[0];

  $: storyMode = activeStep.id !== "exploratory-mode";

  const dev = process.env.NODE_ENV === "development";
  $: promise = loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${activeStep.id}.png`);
</script>

<div class="meta-area" data-name="meta-area">
  {#if !storyMode}
    <Controls />
  {/if}

  <div class="type" style="color: {getMainGodColor(activeStep.type)}">
    {getGodImportanceLabel(activeStep.type)}
  </div>
  <div class="name">{activeStep.title}</div>
  <div>
    {#await promise}
      Loading...
    {:then img}
      <img src={img.src} alt="image of {activeStep.title}" />
    {/await}
  </div>
</div>

<style>
  .meta-area {
    /* grid-area: meta-area; */
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  .type {
    font-size: 1rem;
    font-weight: bold;

    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .name {
    font-size: 2rem;
  }
  img {
    margin: 0 auto;
  }
</style>
