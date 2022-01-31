<script>
  export let step = "";
  export let selected = false;

  import { getLightGodColor, getMainGodColor } from "$domain/getters";
</script>

<div class="step" data-step={step.id} class:selected>
  <!-- <div
    style="border-color: {getMainGodColor(step.type)}; background-color: {getLightGodColor(
      step.type
    )};"
    class="step-bio"
  > -->
  <div
    class="step-item"
    style="border-color: {getMainGodColor(step.type)}; background-color: {getLightGodColor(
      step.type
    )};"
  >
    {@html step.minibio}
  </div>

  {#if step.content}
    {#each step.content as content}
      {#each content.subcontent as subcontent}
        <div
          class="step-item"
          style="border-color: {getMainGodColor(step.type)}; background-color: {getLightGodColor(
            step.type
          )};"
        >
          <p class="step-subtitle" style="color: {getMainGodColor(step.type)};">
            {@html content.subtitle}
          </p>
          <p>{@html subcontent}</p>
        </div>
      {/each}
    {/each}
  {/if}
</div>

<!-- {#if step.illustration}
  <img src="/aztec-gods/illustrations/Simplified-{step.illustration}.png" alt="" />
{/if} -->
<style>
  .step {
    max-width: 24rem;
    margin: 40rem auto 2rem auto;

    /* background-color: gainsboro; */
    text-align: left;

    opacity: 0.4;
    transition: opacity 400ms;

    /* Horizontal scrolling */
    display: flex;
    padding: 1rem 0;

    overflow-x: scroll;
    overscroll-behavior: contain;
    scrollbar-width: none;
    /* touch-action: pan-x; */
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
  }
  .step:last-child {
    margin-bottom: 140vh;
  }
  .selected {
    opacity: 1;
  }

  /* .step-bio {
    border-width: 6px;
    border-style: solid;
    border-radius: 2px;
    padding: 0.825rem;
  } */
  .step-item {
    /* margin: 3rem 0; */

    max-width: 24rem;
    width: 85%;

    flex-shrink: 0;

    padding: 0.825rem;

    border-width: 2px;
    border-style: solid;
    border-radius: 2px;
  }
  .step-item:not(:last-child) {
    margin-right: 1rem;
  }
  .step-subtitle {
    text-transform: uppercase;

    letter-spacing: 0.04em;
  }
  p {
    padding: 0;
    margin: 0 0 0.5rem 0;
  }
  /* img {
    max-width: 35rem;
    margin: 0 auto;
  } */
</style>
