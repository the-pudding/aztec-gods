<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";
  import doc from "$data/doc.json";
  import Geometric from "$components/map/Geometric.svelte";
  import Step from "$components/map/Step.svelte";
  import StepMeta from "$components/map/StepMeta.svelte";
  import Section from "$components/layout/Section.svelte";
  import Controls from "$components/force-layout/Controls.svelte";
  import Gods from "$components/force-layout/Gods.svelte";
  import Links from "$components/force-layout/Links.svelte";
  import Overlay from "$components/force-layout/Overlay.svelte";
  import State from "$components/force-layout/State.svelte";
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
        offset: 0.5
      })
      .onStepEnter(handleStepEnter);
  });
</script>

<svelte:window />

<Section id="gods-pantheon-map" centered>
  <div id="scrolly">
    <figure>
      <div>
        <State {activeStep}>
          <g slot="chart-svg">
            <Links />
          </g>
          <Gods slot="chart-html" {activeStep} />
          <g slot="chart-svg-overlay">
            <Overlay />
          </g>
          <!-- <Controls slot="controls" /> -->
        </State>
      </div>
      <StepMeta {activeStep} />
    </figure>
    <div class="scroll-area">
      <div class="scroll-overlay" />
      <div class="scroll-steps">
        {#each steps as step, i}
          <Step {step} selected={selected === i} />
        {/each}
      </div>
    </div>
  </div>
</Section>

<style>
  figure {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* grid-template-areas: "viz-area scroll-area"; */
    /* grid-area: viz-area; */

    position: -webkit-sticky;
    position: sticky;
    /* width: 600px; */
    height: 100vh;
    left: 0;
    top: 0;
    /* width: 100%; */
    margin: 0 auto;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 0;
  }

  .scroll-area {
    position: relative;
    width: 100%;

    display: grid;
    grid-template-columns: 2fr 1fr;

    pointer-events: none;
  }

  .scroll-overlay {
    pointer-events: none;
  }
  .scroll-steps {
    pointer-events: none;
  }
</style>
