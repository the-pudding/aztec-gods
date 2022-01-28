<script context="module">
  import doc from "$data/doc.json";
  import Heading from "$components/layout/Heading.svelte";
  import Section from "$components/layout/Section.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
</script>

<Section id="intro">
  {#each doc.introduction as p}
    <Paragraph>{@html p}</Paragraph>
  {/each}

  <Heading>{@html doc.codices_title}</Heading>
  {#each doc.codices as p}
    <Paragraph>{@html p.text}</Paragraph>
  {/each}

  <Heading>{@html doc.iconography_title}</Heading>
  {#each doc.iconography as p}
    <Paragraph>{@html p.text}</Paragraph>
  {/each}
</Section>
