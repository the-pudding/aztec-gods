<script context="module">
  export const prerender = true;
  import ScrollyImage from "$components/iconography/ScrollyImage.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Intro from "$components/introduction/Intro.svelte";
  import Scrolly from "$components/pantheon/Scrolly.svelte";
  import Sources from "$components/colophon/Sources.svelte";

  import ContextualElements from "$components/ContextualElements.svelte";
</script>

<Hero />

<Intro />

<ScrollyImage moduleName="Tezca" />

<ScrollyImage moduleName="Tlalte" />

<Scrolly />

<Sources />
