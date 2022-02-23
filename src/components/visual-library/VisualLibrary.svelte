<script>
  import doc from "$data/doc.json";
  import WindHead from "$svg/optimized/wind-god-annotated.svg";
  import Section from "$components/layout/Section.svelte";
  import ScrollableImage from "$components/visual-library/ScrollableImage.svelte";
</script>

<Section fullBleed>
  <div class="horizontal-scroll">
    <!-- <div style="width: 450px;">{@html WindHead}</div> -->
    <ScrollableImage
      title="Imaginary God of Death"
      alt=""
      localUrl="illustrations/Random-death-god-description.jpg"
    />
    <ScrollableImage
      title="Imaginary Goddess of Fertility"
      alt=""
      localUrl="illustrations/Random-fertility-goddess-description.jpg"
    />
    <ScrollableImage
      title="Imaginary Old God"
      alt=""
      localUrl="illustrations/Random-old-god-description.jpg"
    />
    <ScrollableImage
      title="Imaginary God of War"
      alt=""
      localUrl="illustrations/Random-war-god-description.jpg"
    />
  </div>
</Section>

<style>
  .horizontal-scroll {
    overflow-x: auto;
    white-space: nowrap;
    margin: 0;
    padding: 1rem 3rem;
    width: 100%;
  }
  div {
    display: inline-block;
  }
</style>
