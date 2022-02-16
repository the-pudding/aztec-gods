<script>
  export const ssr = false;
  import MaskedImage from "$components/iconography/MaskedImage.svelte";
  import Section from "$components/layout/Section.svelte";

  import scrollama from "scrollama";
  import { onMount } from "svelte";

  export let title = "Tezcatlipoca";
  export let name = "mask-name";
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
      <h3>{@html title}</h3>
      <MaskedImage {name} selected={activeStep.id} {imgPath} {positions} {imageRange} />
    </figure>

    <div class="scroll-wrapper">
      <div class="on-top-of-viz" />
      <div class="scroll-area">
        {#each steps as step, i}
          <div class="step step-{title}" class:selected={selected === i}>
            <div class="step-title">
              {@html step.id}
            </div>
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
  h3 {
    text-align: center;

    font-size: 2rem;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .scroll-wrapper {
    position: relative;
  }
  .step {
    width: 100%;
    max-width: 24rem;
    margin: 30rem auto 2rem auto;
    padding: 1rem;

    opacity: 0.3;
    transition: opacity 400ms;

    pointer-events: all;
    position: relative;
  }
  .step:last-child {
    margin-bottom: 140vh;
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
