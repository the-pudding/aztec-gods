<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyImage from "$components/iconography/ScrollyImage.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import Section from "$components/layout/Section.svelte";
  import Pantheon from "$components/pantheon/Scrolly.svelte";
  import doc from "$data/doc.json";
</script>

<Hero />

<Section id="intro">
  {#each doc.introduction as p}
    <Paragraph>{@html p}</Paragraph>
  {/each}

  <Heading>{@html doc.iconography_title}</Heading>
  {#each doc.iconography as p}
    <Paragraph>{@html p.text}</Paragraph>
  {/each}
</Section>

<ScrollyImage moduleName="Tezca" />

<ScrollyImage moduleName="Tlalte" />

<Pantheon />

<Sources />
