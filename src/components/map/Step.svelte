<script>
  export let step = "";
  export let selected = false;

  import { getLightGodColor, getMainGodColor } from "$domain/getters";
</script>

<div class="step" data-step={step.id} class:selected>
  <div
    class="step-intro"
    style="border-color: {getMainGodColor(step.type)}; background-color: {getLightGodColor(
      step.type
    )};"
  >
    <!-- {#if step.id}
      <div class="step-title" style="background-color: {getMainGodColor(step.type)};">
        {step.id}
      </div>
    {/if} -->
    <div class="step-bio">{step.minibio}</div>
  </div>
  {#if step.content}
    {#each step.content as content}
      <div
        class="step-item"
        style="border-color: {getMainGodColor(step.type)}; background-color: {getLightGodColor(
          step.type
        )};"
      >
        <p class="step-subtitle" style="color: {getMainGodColor(step.type)};">{content.subtitle}</p>
        {#each content.subcontent as subcontent}
          <p>{subcontent}</p>
        {/each}
      </div>
    {/each}
  {/if}
</div>
{#if step.illustration}
  <img src="/aztec-gods/illustrations/Simplified-{step.illustration}.png" alt="" />
{/if}

<style>
  .step {
    max-width: 24rem;
    margin: 40rem auto 2rem auto;

    text-align: left;
    font-size: 0.825rem;
    font-weight: 500;

    opacity: 0.4;
    transition: opacity 400ms;
  }
  .step:last-child {
    margin-bottom: 120vh;
  }
  .selected {
    opacity: 1;
  }
  .step-intro {
    border-width: 6px;
    border-style: solid;
    border-radius: 2px;
  }
  .step-bio {
    padding: 0.825rem;
  }
  .step-title {
    color: var(--color-background-lowlight);
    text-align: center;
    font-size: 2rem;
    padding: 0.825rem;
  }
  .step-item {
    margin: 3rem 0;
    padding: 0.825rem;

    border-width: 2px;
    border-style: solid;
    border-radius: 2px;
  }
  .step-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  p {
    padding: 0;
    margin: 0 0 0.5rem 0;
  }
  img {
    max-width: 35rem;
    margin: 0 auto;
  }
</style>
