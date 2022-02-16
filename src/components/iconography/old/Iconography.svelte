<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tezcaPositions, tlatlePosition } from "$components/iconography/iconographySetup";
  import { tezca } from "$components/iconography/tezca";
  import { tlalte } from "$components/iconography/tlalte";
  import Section from "$components/layout/Section.svelte";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
</script>

<Section fullBleed>
  <h2 class="hidden">Explorable Images of Tezcatlipoca and Tlaltecuhtli.</h2>
  <h3>{@html doc.iconography_tezca}</h3>
  <ScrollableImage
    name="tezca"
    steps={doc["tezca-steps"]}
    selected="colors"
    imgPath={tezca}
    positions={tezcaPositions}
    {imageRange}
  />
  <!-- <h3>{@html doc.iconography_tlalte}</h3>
  <ScrollableImage
    name="tlatle"
    steps={doc["tlalte-steps"]}
    selected="claws"
    imgPath={tlalte}
    positions={tlatlePosition}
    {imageRange}
  /> -->
</Section>

<style>
  h3 {
    text-align: center;
    margin: 5rem 1rem 0 1rem;
    font-size: 2rem;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  @media only screen and (min-width: 30em) {
    h3 {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 50em) {
    h3 {
      font-size: 4rem;
    }
  }
</style>
