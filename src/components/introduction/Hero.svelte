<script context="module">
  import Pantheon from "./../pantheon/Pantheon.svelte";
  import doc from "$data/doc.json";
  import Section from "$components/layout/Section.svelte";
  import Image from "$components/layout/Image.svelte";
  import loadImage from "$utils/loadImage";

  const icons = [
    "ahuitzotl",
    "tonacacihuatl",
    "chantico",
    "azcatl",
    "ce_ozomatli",
    "ahkinshok",
    "tlatlauhqui_tezcatlipoca",
    "mixcoatl",
    "ometeotl",
    "toci",
    "xochiquetzal"
  ];
  const dev = process.env.NODE_ENV === "development";
</script>

<Section fullBleed>
  <div class="grid">
    {#each icons as icon, i}
      <div class="illustration" style="grid-area: i{i};">
        {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${icon.toLowerCase()}.svg`)}
          <span />
        {:then img}
          <img src={img.src} alt={icon} />
        {:catch}
          <span />
        {/await}
      </div>
    {/each}
    <!-- display: {i > 5 ? `none` : `block`}; 
        place-self: {i % 2 === 0
          ? 'end end'
          : i % 3 === 0
          ? 'start start'
          : 'center center'}; -->

    <h1 class="title">A Visual Guide to the Aztec Pantheon</h1>
  </div>
</Section>

<style>
  .grid {
    padding: 1rem;

    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;

    grid-template-columns: repeat(5, minmax(50px, 1fr));
    grid-template-rows: repeat(6, minmax(50px, auto));
    grid-template-areas: 
    /* Show 6 icons */
      "i1 . . i2 i2"
      ". i0 . i2 i2"
      "t1 t1 t1 t1 t1"
      "i4 i4 . . i5"
      "i4 i4 i3 . .";
  }

  /* // Show 8 icons
          `'i0 . . . i1 . . . . . . i2 . . . .'
            '. t t t t t t t t t t t t t t i7'
            'i6 t t t t t t t t t t t t t t .'
            '. t t t t t t t t t t t t t t .'
            '. . i3 . . . . i4 . . . . . i5 . .'`,

          // Show 12 icons
          `'i0 . . . i1 . . . . . . i2 . . . i8'
            '. . i11 t t t t t t t t t t . . .'
            'i6 . . t t t t t t t t t t i7 . .'
            '. . . t t t t t t t t t t . . i9'
            '. i10 . i3 . . . i4 . . . . . i5 . .'`, */

  .title {
    grid-area: t1;

    /* display: block; */

    font-family: var(--sans);
    text-transform: uppercase;
    text-align: center;
    padding: 3rem 0;
    font-size: 3rem;
    line-height: 1.2;

    /* color: var(--color-highlight); */
    border-radius: 2px;
    /* border: 3px solid var(--color-black); */
    width: 100%;
    height: 100%;

    color: black;
  }
  .illustration {
    box-sizing: border-box;
    /* border-radius: 2px; */
    /* border: 4px solid var(--color-highlight); */
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .illustration::after {
    content: "";
    display: block;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    position: absolute;
    top: -2px;
    left: -2px;
    margin: 0px auto;
    text-indent: -9999px;
    border: 4px solid var(--color-highlight);
  }

  /* @media only screen and (min-width: 30em) {
    .grid {
      grid-template-columns: repeat(5, minmax(50px, 1fr));
      grid-template-rows: repeat(6, minmax(50px, auto));
      grid-template-areas: 

    }
  } */

  @media only screen and (min-width: 30em) {
    .grid {
      grid-template-columns: repeat(12, minmax(50px, 1fr));
      grid-template-rows: repeat(7, minmax(50px, auto));
      grid-template-areas:
        ". . . . i0 . . . i1 i2 i2 ."
        ". i6 i6 . . . . i4 . i2 i2 ."
        ". i6 i6 . . . . . . . . i5"
        ". i3 . t1 t1 t1 t1 t1 t1 . . ."
        "i7 . . t1 t1 t1 t1 t1 t1 . . ."
        ". . . . . . . . . i10 i8 ."
        ". . i9 . . . . . . . . .";
    }
  }
</style>
