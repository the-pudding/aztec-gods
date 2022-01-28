<script context="module">
  export const prerender = true;
  import Iconography from "$components/iconography/Iconography.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Intro from "$components/introduction/Intro.svelte";
  import Scrolly from "$components/map/Scrolly.svelte";
  import Sources from "$components/colophon/Sources.svelte";

  import ContextualElements from "$components/ContextualElements.svelte";
</script>

<Hero />

<Intro />

<Iconography />

<ContextualElements />

<Scrolly />

<Sources />
