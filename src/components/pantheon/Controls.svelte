<script>
  import { getContext } from "svelte";
  import doc from "$data/doc.json";

  const { bounds, nodes, interaction, keyword, linkHighlight, keywords, linkTypes } =
    getContext("chart-state");

  $: interactionBio = $interaction ? $nodes.filter((d) => d.name === $interaction)[0].bio : "";
</script>

<div class="wrapper">
  <div>
    <h3>{@html doc.pantheon_control_map}</h3>
    {#each linkTypes as linkType}
      <button
        on:click={() => linkHighlight.highlight(linkType)}
        class:selected={linkType === $linkHighlight}
      >
        {linkType}
      </button>
    {/each}

    <h3>
      {@html doc.pantheon_control_fade}
      <small
        style="text-decoration: underline; cursor: pointer;"
        on:click={() => keyword.lowlight()}>unset</small
      >
    </h3>
    {#each keywords as k}
      <button on:click={() => keyword.highlight(k)} class:selected={k === $keyword}>{k}</button>
    {/each}

    <h3>{$interaction ?? ""}</h3>
    <div>{interactionBio ?? ""}</div>
    <!-- <h3>Find a God <small>{$interaction}</small></h3>
    {#each grouped as group}
      <div>
        {#each group[1].sort((a, b) => ascending(a, b)) as god}
          <button
            on:click={() => interaction.highlight(getName(god))}
            style="color: {godColorScale(getImportance(god))}">{getName(god)}</button
          >
        {/each}
      </div>
    {/each} -->
  </div>
</div>

<style>
  .wrapper {
    /* padding: 0.5rem; */
    max-height: 100vh;
    /* overflow: scroll; */

    display: flex;

    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  button {
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    margin: 0 0.1rem 0.1rem 0;
  }
</style>
