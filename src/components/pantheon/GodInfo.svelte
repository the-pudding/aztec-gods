<script>
  import { fade } from "svelte/transition";
  import doc from "$data/doc.json";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import { getContext } from "svelte";
  import loadImage from "$utils/loadImage";
  import DomainChart from "$components/pantheon/DomainChart.svelte";
  import DomainHeatmap from "$components/pantheon/DomainHeatmap.svelte";
  import TextButton from "$components/layout/TextButton.svelte";

  const dev = process.env.NODE_ENV === "development";

  export let activeStep = doc.pantheon[0];

  const { getName, getImportance, selection, linkTypes } = getContext("chart-state");

  $: exploratoryMode = activeStep.id === "exploratory-mode";

  let visible = "main-info";

  $: console.log($selection);
</script>

<div class="wrapper">
  {#if $selection}
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

    <div class="god-info-details">
      {#if visible === "main-info"}
        <div>
          <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
            {getGodImportanceLabel(getImportance($selection))}
          </div>
          <div class="name">{@html getName($selection)}</div>
          <!-- <DomainChart god={$selection} /> -->
          <DomainHeatmap god={$selection} />
          <p class="minibio">{@html $selection.bio}</p>
        </div>
        <TextButton
          iconName="chevron-right"
          position="end"
          buttonLabel="details"
          handleClick={() => (visible = "details")}
        />
      {:else}
        <div>
          <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
            {getGodImportanceLabel(getImportance($selection))}
          </div>
          <div class="name">{@html getName($selection)}</div>
          <div class="illu-source">
            <span>Source of illustration:</span>
            {@html $selection.source}
          </div>
          <div class="other-spellings">
            {#if $selection.spellings}
              <span>Other spellings:</span>
              {@html $selection.spellings}
            {/if}
          </div>
        </div>
        <TextButton
          iconName="chevron-left"
          position="start"
          buttonLabel="back"
          handleClick={() => (visible = "main-info")}
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  .wrapper {
    /* width: 100vw; */
    height: calc(100vh - 64px);
    padding: 2rem;
    display: none;

    /* background: var(--color-background-4);
    border-left: 3px solid var(--color-highlight); */
  }
  .illustration {
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 2px solid aliceblue; */
  }
  .illustration img {
    height: 100%;
  }
  .god-info-details {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* border: 1px solid greenyellow; */
  }

  .minibio,
  .illu-source {
    padding-top: 0.5rem;
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
    letter-spacing: 0.06em;
    text-align: center;
    text-transform: uppercase;
    word-break: break-all;
  }
  .other-spellings,
  .illu-source {
    margin-bottom: 0.5rem;
  }
  .other-spellings span,
  .illu-source span {
    display: block;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-size: 0.825rem;
    color: var(--color-gray-dark);
  }
  @media only screen and (min-width: 50em) {
    .wrapper {
      display: block;
    }
    .type {
      font-size: 1.2rem;
    }
    .name {
      font-size: 2.2rem;
    }
  }
</style>
