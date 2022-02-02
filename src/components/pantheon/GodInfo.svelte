<script>
  import { fade } from "svelte/transition";
  import doc from "$data/doc.json";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import { getContext } from "svelte";

  import loadImage from "$utils/loadImage";

  const dev = process.env.NODE_ENV === "development";

  export let activeStep = doc.pantheon[0];

  const { getName, getImportance, selection, linkTypes } = getContext("chart-state");

  $: exploratoryMode = activeStep.id === "exploratory-mode";
</script>

<div class="wrapper">
  {#if exploratoryMode && $selection}
    <!-- < show all Gods -->
    <div class="illustration" transition:fade>
      {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${$selection.id}.svg`)}
        <span>Loading...</span>
      {:then img}
        <img src={img.src} alt="Image of {getName($selection)}." />
      {:catch}
        <span>Sorry no image for {getName($selection)}</span>
      {/await}
    </div>

    <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
      {getGodImportanceLabel(getImportance($selection))}
    </div>
    <div class="name">{@html getName($selection)}</div>
    <p class="minibio">{@html $selection.bio}</p>

    <div class="illu-source">
      <strong>Source of illustration:</strong>
      {@html $selection.source}
    </div>
    <div class="other-spellings">
      {#if $selection.spellings}
        <strong>Other spellings:</strong>
        {@html $selection.spellings}
      {/if}
    </div>
    <button on:click={() => selection.lowlight()}>All Gods</button>
  {/if}
</div>

<style>
  .wrapper {
    width: 100vw;
    height: 100vh;

    display: none;
    /* background: mediumpurple; */
  }
  .illustration {
    width: 400px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 2px solid aliceblue; */
  }
  .type {
    font-size: 0.7rem;
    line-height: 1.2;
    /* letter-spacing: 0.06em; */
    text-align: center;
    text-transform: uppercase;
  }
  .name {
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }
  .minibio {
    height: 250px;
    /* border: 1px solid greenyellow; */
  }
  .other-spellings,
  .illu-source {
    font-size: 0.65rem;
  }
  @media only screen and (min-width: 50em) {
    .wrapper {
      display: block;
      max-width: 400px;
      max-height: 52em;
    }
    .type {
      font-size: 1.4rem;
    }
    .name {
      font-size: 2.2rem;
    }
  }
</style>
