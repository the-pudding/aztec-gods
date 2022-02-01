<script>
  import doc from "$data/doc.json";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import { getContext } from "svelte";

  export let activeStep = doc.pantheon[0];

  const { getName, linkHighlight, linkTypes } = getContext("chart-state");

  $: storyMode = activeStep.type !== "exploratory-mode";

  // const dev = process.env.NODE_ENV === "development";
  // $: promise = loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${activeStep.id}.png`);

  // $: name = getName(god);
</script>

<div class="wrapper">
  <div class="controls-and-info-wrapper">
    <fieldset style="opacity: {storyMode ? 0 : 1}; transition: opacity 200ms;">
      <legend class="hidden">{@html doc.pantheon_control_map}</legend>
      {#each linkTypes as linkType}
        <button
          on:click={() => linkHighlight.highlight(linkType)}
          class:selected={linkType === $linkHighlight}
        >
          {linkType}
        </button>
      {/each}
    </fieldset>

    <div class="type-and-name" style="opacity: {!storyMode ? 0 : 1}">
      {#if activeStep.type}
        <div class="type" style="color: {getMainGodColor(activeStep.type)}">
          {getGodImportanceLabel(activeStep.type)}
        </div>
      {/if}
      <div class="name">
        {@html activeStep.name}
      </div>
      {#if activeStep.title}
        <div class="title">{@html activeStep.title}</div>
      {/if}
    </div>
  </div>

  <div />
</div>

<style>
  .wrapper {
    position: relative;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    line-height: 1;
    height: 100%;
  }
  .controls-and-info-wrapper {
    position: relative;
    width: 100%;
  }
  /* legend {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  } */
  .type-and-name {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    transition: opacity 200ms;

    pointer-events: none;
  }
  .type {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-align: center;
    text-transform: uppercase;
  }
  .name {
    font-size: 1rem;
    letter-spacing: 0.06em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  .title {
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 35em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
    }
    .name {
      font-size: 1.4rem;
    }
    .title {
      font-size: 1rem;
    }
  }
  /* @media only screen and (min-width: 50em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
    }
    .name {
      font-size: 2rem;
    }
    .title {
      font-size: 1.6rem;
    }
  } */
</style>
