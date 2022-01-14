<script context="module">
  import doc from "$data/doc.json";
  import Heading from "$components/layout/Heading.svelte";
</script>

{#each doc.introduction as p}
  <p>{p}</p>
{/each}

<Heading>{doc.sources_title}</Heading>
{#each doc.sources as p}
  <p>{p.text}</p>
{/each}

<Heading>{doc.iconography_title}</Heading>
{#each doc.iconography as p}
  <p>{p.text}</p>
{/each}
