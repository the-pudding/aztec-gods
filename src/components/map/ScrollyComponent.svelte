<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";
  import doc from "$data/doc.json";
  import Geometric from "$components/map/Geometric.svelte";
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
    <figure><Geometric {activeStep} /></figure>
    <div class="scroll-area">
      {#each steps as step, i}
        <div class="step" data-step={step.id} class:selected={selected === i}>
          {#each step.text as p}
            <p>{p}</p>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</Section>

<style>
  #scrolly {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "viz-area scroll-area";
  }

  figure {
    grid-area: viz-area;

    position: -webkit-sticky;
    position: sticky;
    width: 600px;
    height: 600px;
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
    grid-area: scroll-area;
  }
  .step {
    margin: 1rem 0;
    padding: 300px 1rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;

    opacity: 0.4;
    transition: opacity 400ms;

    z-index: 100;
  }

  .selected {
    opacity: 1;
  }

  /* figure p {
    text-align: center;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 8rem;
    font-weight: 900;
    color: #fff;
  } */
</style>
