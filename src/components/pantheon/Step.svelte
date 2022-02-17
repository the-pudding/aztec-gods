<script>
  export let step = "";
  export let selected = false;
  export let activeStep = false;
</script>

<div class="step step-pantheon" class:selected>
  {#if step.title}
    <div class="step-title">
      {@html step.title}
    </div>
  {/if}
  <div class="step-text">{@html step.text}</div>
</div>

<style>
  .step {
    /* width: 100%; */

    margin: 30rem 1rem 2rem 1rem;
    padding: 1rem;

    background-color: var(--color-background);
    opacity: 0.3;
    transition: opacity 400ms;

    pointer-events: all;
    position: relative;
    z-index: 50;
  }
  .step:first-child {
    margin-top: 0;
  }
  .step:last-child {
    margin-bottom: 140vh;
  }
  .selected {
    opacity: 1;
  }
  .step-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 1.5rem;
    border-bottom: 3px solid var(--color-highlight);
    padding: 1rem 0;
  }
  .step-text {
    font-size: 1.3rem;

    padding: 1rem 0;
  }

  @media only screen and (min-width: 50em) {
    .step {
      margin: 50rem 1rem 2rem 1rem;
    }
  }
</style>
