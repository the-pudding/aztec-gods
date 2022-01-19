<script>
  export let activeStep = {};

  import { getLightGodColor, getMainGodColor, getGodImportanceLabel } from "$domain/getters";
</script>

<div class="meta-area">
  <div />
  <div class="type" style="color: {getMainGodColor(activeStep.type)}">
    {getGodImportanceLabel(activeStep.type)}
  </div>
  <div class="name">{activeStep.title}</div>
  <div>
    <img src="/aztec-gods/img/{activeStep.id}.png" alt="image of {activeStep.title}" />
  </div>
</div>

<style>
  .meta-area {
    /* grid-area: meta-area; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .type {
    font-size: 1rem;
    font-weight: bold;

    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .name {
    font-size: 2rem;
  }
  img {
    margin: 0 auto;
  }
</style>
