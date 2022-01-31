<script>
  import ExplorableImage from "$components/iconography/ExplorableImage.svelte";
  import { tezcaPositions, tlatlePosition } from "$components/iconography/iconographySetup";
  import { tezca } from "$components/iconography/tezca";
  import { tlalte } from "$components/iconography/tlalte";
  import Section from "$components/layout/Section.svelte";
  import doc from "$data/doc.json";

  const imageRange = [0, 10640];
</script>

<Section fullBleed>
  <!-- FIXME: Add a hidden heading for a11y -->
  <ExplorableImage
    name="tezca"
    steps={doc["tezca-steps"]}
    selected="colors"
    imgPath={tezca}
    positions={tezcaPositions}
    {imageRange}
  />
  <ExplorableImage
    name="tlatle"
    steps={doc["tlalte-steps"]}
    selected="claws"
    imgPath={tlalte}
    positions={tlatlePosition}
    {imageRange}
  />
</Section>
