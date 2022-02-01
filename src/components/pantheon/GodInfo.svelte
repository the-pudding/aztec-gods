<script>
  import doc from "$data/doc.json";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import { getContext } from "svelte";
  import loadImage from "$utils/loadImage";
  const dev = process.env.NODE_ENV === "development";

  export let activeStep = doc.pantheon[0];

  const { getName, getImportance, selection, linkTypes } = getContext("chart-state");

  $: exploratoryMode = activeStep.id === "exploratory-mode";

  $: console.log($selection);
</script>

{#if exploratoryMode && $selection}
  <div class="wrapper">
    <!-- < show all Gods -->
    <div class="illustration">
      {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${getName($selection)}.png`)}
        <div>Loading...</div>
      {:then img}
        <img src={img.src} alt="Image of {getName($selection)}." />
      {:catch}
        <div>Sorry no image for {getName($selection)}</div>
      {/await}
    </div>

    <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
      {getGodImportanceLabel(getImportance($selection))}
    </div>
    <div class="name">{@html getName($selection)}</div>
    <p class="minibio">{@html $selection.bio}</p>

    <div class="illu-source">{@html $selection.source}</div>
    <div class="other-spellings">{@html $selection.spellings}</div>

    <!-- otherspellings -->
  </div>
{/if}

<style>
  .illustration {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  /* .minibio {
    font-size: 1rem;
    text-align: left;
  } */

  @media only screen and (min-width: 35em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
    }
    .type {
      font-size: 1.4rem;
    }
    .name {
      font-size: 2.2rem;
    }
  }
</style>
