<script>
  import Link from "$components/pantheon/Link.svelte";
  import { getContext } from "svelte";
  const { bounds, currentLinks } = getContext("chart-state");
</script>

<g data-name="links" transform={`translate(${$bounds.margins.left}, ${$bounds.margins.top})`}>
  {#each currentLinks as link, i}
    <Link {link} />
  {/each}
</g>
