<script context="module">
  import Pantheon from "./../pantheon/Pantheon.svelte";
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
  import Image from "$components/layout/Image.svelte";
  import loadImage from "$utils/loadImage";

  // const icons = [
  //   "ahuitzotl",
  //   "tonacacihuatl",
  //   "chantico",
  //   "azcatl",
  //   "ce_ozomatli",
  //   "ahkinshok",
  //   "tlatlauhqui_tezcatlipoca",
  //   "mixcoatl",
  //   "ometeotl",
  //   "toci",
  //   "xochiquetzal"
  // ];
  const dev = process.env.NODE_ENV === "development";
</script>

<Section fullBleed>
  <div class="hero-image">
    {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/ometeotl.svg`)}
      <span />
    {:then img}
      <img src={img.src} alt={"icon"} />
    {:catch}
      <span />
    {/await}
  </div>
  <h1 class="title">A Visual Guide to the Aztec Pantheon</h1>
  <div class="credits">
    <div class="credits-role">
      <div>Story & Illustrations</div>
      <div>Code</div>
    </div>

    <div class="credits-name">
      <div><a href="https://pudding.cool/author/gwendal-uguen/">Gwendal Uguen</a></div>
      <div><a href="https://pudding.cool/author/gwendal-uguen/">Luc Guillemot</a></div>
    </div>
  </div>
</Section>

<style>
  .title {
    max-width: 10em;
    padding: 0 2rem;
    margin: 0 auto;
    font-family: var(--serif);
    text-align: center;
    font-size: 3rem;
    line-height: 1;
  }
  .credits {
    font-size: 1rem;
    padding: 1rem;
    display: flex;
  }
  .credits-role {
    flex: 1;
    text-align: right;
    margin-right: 0.2rem;
  }
  .credits-name {
    flex: 1;
    text-align: left;
    margin-left: 0.2rem;
  }
  .credits-name > a {
    display: block;
  }
  /* .title::before {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 120px;
    margin: 2.5rem auto;
    border-radius: 2px;
  }
  .title::after {
    display: block;
    content: "";
    background: var(--color-highlight);
    height: 3px;
    width: 120px;
    margin: 2.5rem auto;
    border-radius: 2px;
  }
  .hero-image {
    width: 100%;
    padding: 0 1rem;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-image > img {
    max-width: 100px;
  }

  @media only screen and (min-width: 30em) {
    .title {
      font-size: 4rem;
    }
  }
  @media only screen and (min-width: 50em) {
    .title {
      font-size: 5rem;
    }
  }
</style>
