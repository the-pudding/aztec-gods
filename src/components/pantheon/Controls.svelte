<script>
  import { fade } from "svelte/transition";
  import { getContext } from "svelte";
  import doc from "$data/doc.json";

  const { bounds, nodes, interaction, keyword, linkHighlight, keywords, linkTypes } =
    getContext("chart-state");

  $: interactionBio = $interaction ? $nodes.filter((d) => d.name === $interaction)[0].bio : "";
</script>

<div class="wrapper" transition:fade>
  <div>
    <!-- <h3 class="god-name">{$interaction ?? ""}</h3>
    <div class="god-bio">{interactionBio ?? ""}</div> -->
    <fieldset>
      <legend class="hidden">{@html doc.pantheon_control_map}</legend>
      {#each linkTypes as linkType}
        <button
          on:click={() => linkHighlight.highlight(linkType)}
          class:selected={linkType === $linkHighlight}
        >
          {linkType}
        </button>
      {/each}
    </fieldset>

    <!-- <fieldset>
      <legend
        >{@html doc.pantheon_control_fade}
        <small
          style="text-decoration: underline; cursor: pointer;"
          on:click={() => keyword.lowlight()}>unset</small
        ></legend
      >
      {#each keywords as k}
        <button on:click={() => keyword.highlight(k)} class:selected={k === $keyword}>{k}</button>
      {/each}
    </fieldset> -->

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
    /* height: 100vh; */
    /* overflow: scroll; */
    /* border: 3px solid floralwhite; */
    padding: 0.5rem;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  legend {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  /* .god-name {
    font-size: 1rem;
  }

  .god-bio {
    font-size: 0.8rem;
  } */
  button {
    font-size: 0.7rem;
    padding: 0.1rem 0.2rem;
    margin: 0 0.1rem 0.1rem 0;
  }
  @media only screen and (min-width: 50em) {
    .wrapper {
      /* height: 100vh; */
    }
  }
</style>
