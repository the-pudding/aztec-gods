<script>
  export const ssr = false;
  import MaskedImage from "$components/iconography/MaskedImage.svelte";
  import Section from "$components/layout/Section.svelte";

  import scrollama from "scrollama";
  import { onMount } from "svelte";

  export let title = "Tezcatlipoca";
  export let name = "mask-name";
  export let source = "illustration source";
  export let sourceUrl = undefined;
  export let imgPath = "";
  export let selected = "";
  export let steps = [];
  export let positions = [];
  export let imageRange = [0, 1];

  // Default with first step
  let activeStep = steps[0];

  const handleStepEnter = (response) => {
    selected = response.index;
    activeStep = steps[response.index];
  };

  onMount(() => {
    const scroller = scrollama();
    scroller
      .setup({
        step: `div .step-${title}`,
        // debug: true,
        offset: 0.5
      })
      .onStepEnter(handleStepEnter);
  });
</script>

<svelte:window />

<Section id="gods-iconography-{title}" fullBleed>
  <div id="scrolly">
    <figure>
      <MaskedImage {name} selected={activeStep.id} {imgPath} {positions} {imageRange} />
      <div class="illustration-source">
        {#if sourceUrl}
          <a href={sourceUrl}>{@html source}</a>
        {:else}
          {@html source}
        {/if}
      </div>
    </figure>

    <div class="scroll-wrapper">
      <div class="on-top-of-viz" />
      <div class="scroll-area">
        <div class="god-name">
          <h3>{@html title}</h3>
        </div>
        {#each steps as step, i}
          <div class="step step-{title}" class:selected={selected === i}>
            {#if step.title}
              <div class="step-title">
                {@html step.title}
              </div>
            {/if}
            <div class="step-text">{@html step.text}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</Section>

<style>
  #scrolly {
    position: relative;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  figure {
    position: -webkit-sticky;
    position: sticky;

    width: 100%;
    height: 100vh;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 0;

    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }
  .scroll-wrapper {
    position: relative;
  }

  .scroll-area {
    position: relative;
  }
  .god-name {
    background-color: var(--color-background);
    position: sticky;
    left: 0;
    top: 0;

    padding: 1rem;

    z-index: 2;

    text-align: center;
  }
  /* .god-name span {
    font-style: italic;
  } */
  .illustration-source {
    width: 100%;
    font-size: 0.8rem;
    line-height: 1;
    font-style: italic;
  }
  h3 {
    font-size: 2rem;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
  }

  /* h3::after {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 200px;
    margin: 1.5rem auto 2rem;
    border-radius: 2px;
  } */

  .step {
    width: 100%;
    /* max-width: 24rem; */
    margin: 30rem auto 2rem auto;
    padding: 1rem 1rem;

    opacity: 0.3;
    transition: opacity 400ms;

    pointer-events: all;
    position: relative;
  }
  .step:first-child {
    margin-top: 15rem;
  }
  .step:last-child {
    margin-bottom: 100vh;
  }
  .selected {
    opacity: 1;
  }
  .step-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 1.5rem;
    border-bottom: 3px solid var(--color-highlight);
    padding: 1rem 0;
  }
  .step-text {
    font-size: 1.3rem;

    padding: 1rem 0;
  }
  @media only screen and (min-width: 30em) {
    h3 {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 50em) {
    .step {
      margin: 50rem auto 2rem auto;
    }
  }
</style>
