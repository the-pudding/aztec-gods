<script>
  import { ascending, groups } from "d3";

  import { getContext } from "svelte";

  const {
    bounds,
    points,
    interaction,
    keyword,
    linkHighlight,
    keywords,
    getName,
    getImportance,
    godColorScale,
    linkTypeColorScale
  } = getContext("chart-state");

  $: grouped = groups(points, (d) => getImportance(d));
</script>

<div class="wrapper" style="height:{bounds.height}px;">
  <div>
    <h3>
      Links <small
        style="text-decoration: underline; cursor: pointer;"
        on:click={() => linkHighlight.lowlight()}>unset</small
      >
    </h3>
    {#each linkTypeColorScale.domain() as linkType}
      <button
        on:click={() => linkHighlight.highlight(linkType)}
        style="color: {$linkHighlight === linkType
          ? '#fff'
          : linkTypeColorScale(linkType)}; background: {$linkHighlight === linkType
          ? linkTypeColorScale(linkType)
          : '#fff'}"
      >
        {linkType}
      </button>
    {/each}

    <h3>
      Fade by Domain <small
        style="text-decoration: underline; cursor: pointer;"
        on:click={() => keyword.lowlight()}>unset</small
      >
    </h3>
    {#each keywords as k}
      <button on:click={() => keyword.highlight(k)}>{k}</button>
    {/each}

    <h3>Find a God <small>{$interaction}</small></h3>
    {#each grouped as group}
      <div>
        {#each group[1].sort((a, b) => ascending(a, b)) as god}
          <button
            on:click={() => interaction.highlight(getName(god))}
            style="color: {godColorScale(getImportance(god))}">{getName(god)}</button
          >
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    padding: 0.5rem;
    max-height: 100vh;
    overflow: scroll;
  }
  button {
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    margin: 0 0.1rem 0.1rem 0;
    background: #fff;
  }
</style>
