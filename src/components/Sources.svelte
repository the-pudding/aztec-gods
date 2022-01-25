<script>
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
  import SourceItem from "$components/SourceItem.svelte";
</script>

<Section id="article-sources">
  <h2>{doc.sources_title}</h2>

  {#each doc.sources as group}
    <h3>
      {group.group_title}
    </h3>

    <ul>
      {#each group.sources_group as groupItem}
        {#if groupItem.sources_subgroup}
          <li>{groupItem.subgroup_title}</li>
          <ul>
            {#each groupItem.sources_subgroup as subgroupItem}
              <SourceItem
                author={subgroupItem.author}
                title={subgroupItem.title}
                url={subgroupItem.url}
              />
            {/each}
          </ul>
        {:else}
          <SourceItem author={groupItem.author} title={groupItem.title} url={groupItem.url} />
        {/if}
      {/each}
    </ul>
  {/each}
</Section>

<style>
  h3 {
    font-weight: 700;
  }
  .author {
    font-weight: 500;
  }
  .title {
    font-style: italic;
  }
</style>
