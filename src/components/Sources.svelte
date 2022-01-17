<script>
  import doc from "$data/doc.json";
</script>

<h2>{doc.sources_title}</h2>

{#each doc.sources as source}
  <h3>
    {source.group_title}
  </h3>

  {#each source.sources_group as subgroup}
    <h4>{subgroup.subgroup_title}</h4>
    <ul>
      {#each subgroup.sources_subgroup as subgroupItem}
        <li>
          <span class="title">{subgroupItem.title}</span>:
          <span class="author">{subgroupItem.author}</span>
        </li>
      {/each}
    </ul>
  {/each}
{/each}

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
