<script>
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Image from "$components/layout/Image.svelte";
</script>

<Section id="context">
  <!-- <Heading>{@html doc.context_title}</Heading> -->

  <Paragraph>{@html doc.context_timeline}</Paragraph>
  <Paragraph>{@html doc.context_suns}</Paragraph>

  <Image localUrl="img/aztec-timeline-bis.jpg" alt={doc.context_suns_alt} />

  <!-- <Image
    localUrl="illustrations/Simplified-mesoamerican-timeline.png"
    alt={doc.context_timeline_alt}
  /> -->

  <!-- <Paragraph>{@html doc.context_empire}</Paragraph>
  <Image localUrl="illustrations/Simplified-map-of-aztec-empire.png" alt={doc.context_empire_alt} /> -->

  <!-- <Image localUrl="illustrations/Simplified-Five-suns.png" alt={doc.context_suns_alt} /> -->
</Section>
