<script>
  export let localUrl = "";
  export let alt = "";

  import loadImage from "$utils/loadImage";

  const dev = process.env.NODE_ENV === "development";
</script>

{#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/${localUrl}`)}
  <span>Loading {alt}</span>
{:then img}
  <img src={img.src} {alt} />
{:catch error}
  {console.warn(error)}
{/await}
