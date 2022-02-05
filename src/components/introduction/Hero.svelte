<script context="module">
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
  import Image from "$components/layout/Image.svelte";
</script>

<Section fullBleed>
  <div class="hero">
    <Image localUrl="img/hero.png" alt="hero" />
    <!-- <h1>
      {doc.title}
    </h1> -->
  </div>
</Section>

<style>
  h1 {
    text-align: center;
  }
</style>
