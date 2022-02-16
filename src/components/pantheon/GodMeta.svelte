<script>
  import doc from "$data/doc.json";
  import { getGodImportanceLabel, getMainGodColor, getLinkTypeLabel } from "$domain/getters";
  import { getContext } from "svelte";
  import TextButton from "$components/layout/TextButton.svelte";

  const { linkHighlight, linkTypes, selection } = getContext("chart-state");

  // $: explanatoryMode = activeStep.type === "explanatory-mode";
  // $: exploratoryMode = activeStep.type === "exploratory-mode";
  // $: storyMode = explanatoryMode == exploratoryMode;
</script>

<fieldset class="wrapper">
  <legend class="hidden">{@html doc.pantheon_control_map}</legend>
  {#each linkTypes as linkType}
    <button
      on:click={() => linkHighlight.highlight(linkType)}
      class:selected={linkType === $linkHighlight}
    >
      {getLinkTypeLabel(linkType)}
    </button>
  {/each}
</fieldset>

<!-- <TextButton
        disabled={!$selection}
        buttonLabel="Show all gods"
        handleClick={() => selection.lowlight()}
      /> -->

<!-- <div class="type-and-name" style="opacity: {!storyMode ? 0 : 1}">
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
    </div> -->
<!-- </div> -->

<!-- <div /> -->
<style>
  .wrapper {
    position: relative;
    padding: 1rem;
    margin: 0;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 3px solid var(--color-highlight);

    background-color: var(--color-background-4);
  }

  button {
    margin: 0 0.5rem 0 0;
  }

  /* .controls-and-info-wrapper {
    position: relative;
    width: 100%;
  } */
  /* legend {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  } */
  /* .type-and-name {
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
  } */
  /* .type {
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
  } */

  @media only screen and (min-width: 50em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
    }
    /* .name {
      font-size: 1.4rem;
    }
    .title {
      font-size: 1rem;
    } */
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
