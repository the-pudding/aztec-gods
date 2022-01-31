<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";
  import doc from "$data/doc.json";

  import Step from "$components/pantheon/Step.svelte";
  import StepMeta from "$components/pantheon/StepMeta.svelte";
  import Section from "$components/layout/Section.svelte";

  import Gods from "$components/pantheon/Gods.svelte";
  import Links from "$components/pantheon/Links.svelte";
  import Overlay from "$components/pantheon/Overlay.svelte";
  import State from "$components/pantheon/State.svelte";
  let selected = 0;

  // Default with first step
  let activeStep = doc.pantheon[0];

  const steps = doc.pantheon;

  const handleStepEnter = (response) => {
    selected = response.index;
    activeStep = steps[response.index];
  };

  onMount(() => {
    const scroller = scrollama();

    scroller
      .setup({
        step: "div .step",
        // debug: true,
        offset: 0.7
      })
      .onStepEnter(handleStepEnter);
  });

  $: storyMode = activeStep.id !== "exploratory-mode";
</script>

<svelte:window />

<Section id="gods-pantheon-map" fullBleed>
  <div id="scrolly">
    <figure>
      <State {activeStep}>
        <g slot="chart-svg">
          <Links />
        </g>
        <Gods slot="chart-html" {activeStep} />
        <g slot="chart-svg-overlay">
          <Overlay noPointerEvents={storyMode} />
        </g>
        <StepMeta slot="meta" {activeStep} />
      </State>
    </figure>

    <div class="scroll-wrapper">
      <div />
      <div class="scroll-area">
        {#each steps as step, i}
          <Step {step} selected={selected === i} />
        {/each}
      </div>
    </div>
  </div>
</Section>

<style>
  #scrolly {
    position: relative;

    max-width: 64em;
    margin: 0 auto;

    padding: 0 0.5rem;
  }
  figure {
    position: -webkit-sticky;
    position: sticky;

    width: 100%;

    left: 0;
    top: 0;

    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }

  .scroll-wrapper {
    position: relative;

    display: grid;
    grid-template-columns: 1fr;

    pointer-events: none;
  }
  @media only screen and (min-width: 50em) {
    .scroll-wrapper {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr;
    }
  }
</style>
