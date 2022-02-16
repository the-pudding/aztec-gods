<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tezcaPositions } from "$components/iconography/setup/iconographySetup";
  import { tezca } from "$components/iconography/setup/tezca";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tezca-steps"];
</script>

<ScrollableImage
  title="Tezcatlipoca"
  name="tezca"
  imgPath={tezca}
  selected={0}
  {steps}
  positions={tezcaPositions}
  {imageRange}
/>
