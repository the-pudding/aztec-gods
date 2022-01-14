<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";
  import doc from "$data/doc.json";
  import Geometric from "$components/map/Geometric.svelte";

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

<section id="scrolly">
  <figure><Geometric {activeStep} /></figure>
  <div>
    {#each steps as step, i}
      <div class="step" data-step={step.id} class:selected={selected === i}>
        {#each step.text as p}
          <p>{p}</p>
        {/each}
      </div>
    {/each}
  </div>
</section>

<div class="outro" />

<style>
  circle {
    transition: cx 700ms, cy 700ms, r 700ms;
  }
  .intro {
    margin: 2rem 0;
    padding: 30rem 2rem;
    background: #ccc;
  }
  #scrolly {
    position: relative;
  }

  .step {
    margin: 2rem 0;
    padding: 300px 2rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    /* background: rgba(250, 250, 250, 0.9); */
    z-index: 100;
  }

  .selected {
    /* background: rgba(200, 200, 200, 0.5); */
    color: crimson;
    transition: background 200ms;
  }
  figure {
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

  figure p {
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
  }

  .outro {
    margin: 2rem;
    padding: 30rem 2rem;
    background: #ccc;
  }
</style>
