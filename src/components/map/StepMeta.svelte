<script>
  export let activeStep = {};
  import loadImage from "$utils/loadImage";

  import { getLightGodColor, getMainGodColor, getGodImportanceLabel } from "$domain/getters";
  const dev = process.env.NODE_ENV === "development";
  $: promise = loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${activeStep.id}.png`);
</script>

<div class="meta-area">
  <div />
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
    display: flex;
    justify-content: center;
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
