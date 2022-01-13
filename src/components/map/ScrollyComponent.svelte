<script>
  export const ssr = false;
  import scrollama from "scrollama";
  import { onMount } from "svelte";

  import { tez, tezImg } from "$components/explain/tezcatlipoca";
  import Geometric from "$components/map/Geometric.svelte";

  let selected = 0;

  const data = [
    {
      id: 1,
      text: "",
      cx: 2000,
      cy: 2000,
      r: 700
    }
    // {
    //   id: 2,
    //   text: "Spear used to judge humans.",
    //   cx: 3000,
    //   cy: 3000,
    //   r: 700
    // },
    // {
    //   id: 3,
    //   text: "Obsidian mirror is used for divination.",
    //   cx: 1500,
    //   cy: 1500,
    //   r: 700
    // },
    // {
    //   id: 4,
    //   text: "The elaborate headpiece represents swirling smokes that emanates from his mirror.",
    //   cx: 800,
    //   cy: 800,
    //   r: 700
    // }
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

<!-- <div class="intro">Introduction</div> -->
<section id="scrolly">
  <figure><Geometric /></figure>
  <div>
    {#each data as d}
      <div class="step" data-step={d.id} class:selected={selected === d.id}>
        <p>{d.text}</p>
      </div>
    {/each}
  </div>
</section>

<!-- <div class="outro">Next content</div> -->
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
    color: white;
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
