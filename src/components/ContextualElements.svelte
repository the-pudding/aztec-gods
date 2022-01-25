<script>
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
  import Paragraph from "$components/layout/Paragraph.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Image from "$components/layout/Image.svelte";
</script>

<Section id="context">
  <Heading>{doc.context_title}</Heading>

  <Paragraph>{doc.context_timeline}</Paragraph>
  <Image
    localUrl="illustrations/Simplified-mesoamerican-timeline.png"
    alt={doc.context_timeline_alt}
  />

  <Paragraph>{doc.context_empire}</Paragraph>
  <Image localUrl="illustrations/Simplified-map-of-aztec-empire.png" alt={doc.context_empire_alt} />

  <Paragraph>{doc.context_suns}</Paragraph>
  <Image localUrl="illustrations/Simplified-Five-suns.png" alt={doc.context_suns_alt} />
</Section>
