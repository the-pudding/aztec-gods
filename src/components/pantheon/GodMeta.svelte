<script>
  import TextButton from "$components/layout/TextButton.svelte";
  import doc from "$data/doc.json";
  import { getLinkTypeLabel } from "$domain/getters";
  import { getContext } from "svelte";

  const { linkHighlight, linkTypes, selection } = getContext("chart-state");
</script>

<fieldset class="wrapper">
  <legend class="hidden">{@html doc.pantheon_control_map}</legend>
  {#each linkTypes as linkType}
    <button
      on:click={() => linkHighlight.highlight(linkType)}
      class:selected={linkType === $linkHighlight}
    >
      {getLinkTypeLabel(linkType)}
    </button>
  {/each}
  <!-- <TextButton
    disabled={!$selection}
    buttonLabel="Reset selection"
    handleClick={() => selection.lowlight()}
  /> -->
</fieldset>

<style>
  fieldset.wrapper {
    position: relative;
    padding: 1rem;
    margin: 0;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    margin: 0 0.5rem 0 0;
  }

  @media only screen and (min-width: 50em) {
    .wrapper {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
