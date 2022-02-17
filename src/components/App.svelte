<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyTezca from "$components/iconography/ScrollyTezca.svelte";
  import ScrollyTlalte from "$components/iconography/ScrollyTlalte.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import Section from "$components/layout/Section.svelte";
  import Pantheon from "$components/pantheon/Pantheon.svelte";
  import doc from "$data/doc.json";
</script>

<Hero />

<Section id="intro">
  {#each doc.introduction as p, i}
    <Paragraph hasCap={i === 0}>{@html p}</Paragraph>
  {/each}
</Section>

<Section id="iconography">
  <Heading>{@html doc.iconography_title}</Heading>
  {#each doc.iconography as p, i}
    <Paragraph hasCap={i === 0}>{@html p.text}</Paragraph>
  {/each}
</Section>

<ScrollyTlalte />

<ScrollyTezca />

<Heading>{@html doc.library_title}</Heading>
<Section id="transition-to-pantheon">
  {#each doc.iconography_transition as p, i}
    <Paragraph hasCap={i === 0}>{@html p}</Paragraph>
  {/each}
</Section>

<!-- PANTHEON -->
<Section id="pantheon">
  <Heading>{@html doc.pantheon_title}</Heading>
</Section>

<Pantheon />

<Sources />
