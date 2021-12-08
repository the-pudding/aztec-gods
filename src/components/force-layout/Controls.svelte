<script>
  import { getContext } from "svelte";

  const { points, bounds, interaction, godTypeColorScale } = getContext("chart-state");
</script>

<div>
  {#each points as god}
    <button
      on:click={() => interaction.highlight(god.id)}
      style="color: {godTypeColorScale(god.Type)}">{god.id}</button
    >
  {/each}
</div>

<style>
  div {
    padding: 0.4rem;
  }
  button {
    padding: 0.2rem 0.4rem;
    margin: 0 0.2rem 0.2rem 0;
    background: #fff;
  }
</style>
