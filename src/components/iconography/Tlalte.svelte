<script>
  import ScrollableImage from "$components/iconography/ScrollableImage.svelte";
  import { tlaltePositions } from "$components/iconography/setup/iconographySetup";
  import { tlalte } from "$components/iconography/setup/tlalte";
  import doc from "$data/doc.json";

  const imageRange = [0, 5320];
  const steps = doc["tlalte-steps"];
</script>

<ScrollableImage
  title="Tlaltecuhtli"
  name="tlalte"
  imgPath={tlalte}
  selected={0}
  {steps}
  positions={tlaltePositions}
  {imageRange}
/>
