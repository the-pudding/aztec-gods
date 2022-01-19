<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";
  import doc from "$data/doc.json";
  import Geometric from "$components/map/Geometric.svelte";
  import Step from "$components/map/Step.svelte";
  import StepMeta from "$components/map/StepMeta.svelte";
  import Section from "$components/layout/Section.svelte";

  let selected = 0;
  let activeStep = "";

  $: steps = doc.pantheon;

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
        offset: 0.2
      })
      .onStepEnter(handleStepEnter);
  });
</script>

<svelte:window />

<Section id="story-mode" centered>
  <div id="scrolly">
    <figure>
      <div>
        <Geometric {activeStep} />
      </div>
      <StepMeta {activeStep} />
    </figure>
    <div class="scroll-area">
      {#each steps as step, i}
        <!-- <div class="step" data-step={step.id} class:selected={selected === i}> -->
        <!-- {#each step.text as content} -->
        <Step {step} selected={selected === i} />
        <!-- {/each} -->
        <!-- </div> -->
      {/each}
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

    /* grid-area: scroll-area; */
  }
</style>
