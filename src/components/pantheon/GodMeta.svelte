<script>
  import TextButton from "$components/layout/TextButton.svelte";
  import doc from "$data/doc.json";
  import { getFieldLabel } from "$domain/getters";
  import { getContext } from "svelte";
  import Search from "$components/pantheon/Search.svelte";
  const { keyword } = getContext("chart-state");
  import { FIELDS } from "$domain/constants";
</script>

<fieldset class="wrapper">
  <legend class="hidden">{@html doc.pantheon_control_map}</legend>
  {#each FIELDS as field}
    <button class:selected={$keyword === field} on:click={() => keyword.highlight(field)}>
      {getFieldLabel(field)}
    </button>
  {/each}
  <!-- <TextButton
    disabled={!$selection}
    buttonLabel="Reset selection"
    handleClick={() => selection.lowlight()}
  /> -->
  <Search />
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
