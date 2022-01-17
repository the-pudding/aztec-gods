<script context="module">
  import doc from "$data/doc.json";
  import Heading from "$components/layout/Heading.svelte";
  import Section from "$components/layout/Section.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
</script>

<Section>
  {#each doc.introduction as p}
    <Paragraph>{p}</Paragraph>
  {/each}

  <Heading>{doc.codices_title}</Heading>
  {#each doc.codices as p}
    <Paragraph>{p.text}</Paragraph>
  {/each}

  <Heading>{doc.iconography_title}</Heading>
  {#each doc.iconography as p}
    <Paragraph>{p.text}</Paragraph>
  {/each}
</Section>
