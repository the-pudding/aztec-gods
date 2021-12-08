<script>
  import { getContext } from "svelte";

  const { points, interaction, godTypeColorScale, linkTypeColorScale } = getContext("chart-state");
</script>

<div class="wrapper">
  <div>
    <span>Highlight a God:</span>
    {#each points as god}
      <button
        on:click={() => interaction.highlight(god.id)}
        style="color: {godTypeColorScale(god.Type)}">{god.id}</button
      >
    {/each}
  </div>
  <div style="margin-top: 0.5rem;">
    <span>Links:</span>
    {#each linkTypeColorScale.domain() as linkType}
      <div style="color: {linkTypeColorScale(linkType)}">
        {linkType}
      </div>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    padding: 0.4rem;
  }
  span {
    font-weight: 600;
  }
  button {
    padding: 0.2rem 0.4rem;
    margin: 0 0.2rem 0.2rem 0;
    background: #fff;
  }
</style>
