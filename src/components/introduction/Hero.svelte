<script context="module">
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
</script>

<Section fullbleed>
  <div class="hero">
    <h1>
      {doc.title}
    </h1>
  </div>
</Section>

<style>
  .hero {
    height: 100vh;
  }
</style>
