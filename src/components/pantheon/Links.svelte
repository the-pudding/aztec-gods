<script>
  import Link from "$components/pantheon/Link.svelte";
  import { getContext } from "svelte";
  const { bounds, currentLinks, linkHighlight } = getContext("chart-state");

  // $: console.log($currentLinks);
</script>

<g data-name="links" transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}>
  {#each $currentLinks as link, i}
    {#key $linkHighlight}
      <Link {link} />
    {/key}
  {/each}
</g>
