<script>
  import { getContext } from "svelte";

  import AutoComplete from "simple-svelte-autocomplete";
  import nodes from "$data/gods/tidy/nodes.json";

  const { selection } = getContext("chart-state");

  let selectedItem = undefined;
</script>

<div class="search">
  <AutoComplete
    bind:selectedItem
    items={nodes}
    labelFieldName="name"
    placeholder="Search a God..."
    hideArrow
    onChange={() => selection.highlight(selectedItem)}
    debug={false}
  />
</div>

<style>
  :global(.autocomplete-input) {
    border: 0px solid var(--color-highlight);
    background-color: var(--color-background-2);
    color: var(--color-gray-dark);
    border-radius: 2px;
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }
</style>
