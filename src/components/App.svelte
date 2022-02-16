<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyImage from "$components/iconography/ScrollyImage.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import Section from "$components/layout/Section.svelte";
  import Pantheon from "$components/pantheon/Pantheon.svelte";
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

<Section id="transition-to-pantheon">
  {#each doc.iconography_transition as p}
    <Paragraph>{@html p}</Paragraph>
  {/each}
</Section>

<!-- PANTHEON -->
<Section id="pantheon">
  <h2>{@html doc.pantheon_title}</h2>
</Section>

<Pantheon />

<Sources />

<style>
  h2 {
    margin: 2rem 0 0.5rem 0;
    font-size: 3rem;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
  }

  /* @media only screen and (min-width: 30em) {
    h2 {
      margin: 3rem 0 1rem 0;
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: 50em) {
    h2 {
      margin: 1.5rem 0 1rem 0;
      font-size: 2rem;
    }
  } */
</style>
