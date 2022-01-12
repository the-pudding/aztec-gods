<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";

  let selected = 0;

  const data = [
    {
      id: 1,
      text: "Step 1",
      color: "orange"
    },
    {
      id: 2,
      text: "Step 2",
      color: "Orchid"
    },
    {
      id: 3,
      text: "Step 3",
      color: "crimson"
    },
    {
      id: 4,
      text: "Step 4",
      color: "LightSeaGreen"
    }
  ];

  const handleStepEnter = (response) => {
    selected = response.index;
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

<!-- <h1>SCROLLYTELLING IS FUN</h1> -->
<div class="intro">Introduction</div>
<section id="scrolly">
  <figure style="background:{data[selected].color}">
    <p>{selected + 1}</p>
  </figure>
  <div>
    {#each data as d}
      <div class="step" data-step={d.id} class:selected={selected === d.id} style="color:{d.color}">
        <p>{d.text}</p>
      </div>
    {/each}
  </div>
</section>
<div class="outro">Next content</div>

<style>
  h1 {
    margin: 2rem 0;
  }

  .intro {
    margin: 2rem 0;
    padding: 30rem 2rem;
    background: #ccc;
  }
  #scrolly {
    position: relative;
    border: 1px solid gray;
  }

  .step {
    margin: 2rem 0;
    padding: 300px 2rem;
    text-align: center;
    font-size: 5rem;
    font-weight: 900;
    background: rgba(200, 200, 200, 0.9);
  }

  .selected {
    background: rgba(200, 200, 200, 0.5);
    color: white;
    transition: background 200ms;
  }
  figure {
    position: -webkit-sticky;
    position: sticky;
    height: 200px;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    background-color: cadetblue;
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
