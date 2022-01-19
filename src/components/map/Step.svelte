<script>
  import { contourDensity } from "d3";

  export let step = "";
  export let selected = false;
</script>

<div class="step" data-step={step.id} class:selected>
  <h3>{step.title}</h3>
  <h4>{step.minibio}</h4>
  {#each step.content as content}
    <h5>{content.subtitle}</h5>
    {#each content.subcontent as subcontent}
      <p>{subcontent}</p>
    {/each}
  {/each}
</div>

<style>
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
</style>
