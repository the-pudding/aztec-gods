<script context="module">
  export const prerender = true;
  import Sources from "$components/colophon/Sources.svelte";
  import ScrollyTezca from "$components/iconography/ScrollyTezca.svelte";
  import ScrollyTlalte from "$components/iconography/ScrollyTlalte.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import IntroParagraph from "$components/layout/IntroParagraph.svelte";
  import Section from "$components/layout/Section.svelte";
  import Pantheon from "$components/pantheon/Pantheon.svelte";
  import VisualLibrary from "$components/visual-library/VisualLibrary.svelte";
  import doc from "$data/doc.json";

  import nodes from "$data/gods/tidy/nodes.json";

  /**
   * SPRITE DIMENSIONS AND POSITION
   *
   * Add 3 px to single sprite image (for some reason)
   *
   * sprite full width = 54800px
   * width of single sprite images = 400px
   *
   * bg-size: 54800px / 400px = 13700%
   *
   * bg-position: x: 400px * index / 54800px * 100
   *
   */
</script>

<Section id="sprite">
  <div>Test Sprite</div>
  <div class="pantheon-container">
    {#each nodes as god, i}
      <figure
        class="god-sprite-container"
        style="background-position: {((403 * i) / 54800) *
          100}% {0}%; background-size: 13700% 100%;"
      >
        <!-- {god.name} -->
        <!-- <figure class="god-sprite-image" /> -->
      </figure>
    {/each}
  </div>
</Section>
<!-- 
<Hero />

<Section id="intro">
  <div class="intro">
    {#each doc.introduction as p, i}
      <IntroParagraph hasCap={i === 0}>{@html p}</IntroParagraph>
    {/each}
  </div>
</Section>

<Section id="iconography">
  <Heading>{@html doc.iconography_title}</Heading>

  <Paragraph hasCap={true}>{@html doc.iconography_intro}</Paragraph>
  <Paragraph>{@html doc.iconography_imaginarygods}</Paragraph>
</Section> -->

<!-- <VisualLibrary /> -->

<!-- PANTHEON -->
<Section id="pantheon">
  <Heading>{@html doc.pantheon_title}</Heading>
  <Paragraph hasCap={true}>{@html doc.pantheon_intro}</Paragraph>

  <Paragraph>{@html doc.pantheon_duality}</Paragraph>
</Section>
<!-- 
<div class="sprite-container">
  <figure class="sprite-image" />
</div>

<ScrollyTlalte />

<ScrollyTezca />

<Pantheon /> -->

<Sources />

<style>
  .pantheon-container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
  }
  .god-sprite-container {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: antiquewhite;
    margin: 0.2rem;
    font-size: 0.6rem;

    background-image: url("/assets/gods/spritesheet.png");
    display: inline-block;
    background-repeat: no-repeat;

    border: 3px solid magenta;
    /* background-position: 0 -1280px; */
    /* background-size: 400px; */
  }

  .intro {
    background-color: var(--color-background-2);
    padding: 1rem;
    margin: 0;
    border-radius: 6px;
  }
  @media only screen and (min-width: 30em) {
    .intro {
      margin: 2rem;
      padding: 2rem;
    }
  }
  @media only screen and (min-width: 50em) {
    .intro {
      margin: 3rem;
    }
  }
</style>
