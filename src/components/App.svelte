<script context="module">
  export const prerender = true;
  import Controls from "$components/force-layout/Controls.svelte";
  import Gods from "$components/force-layout/Gods.svelte";
  import Links from "$components/force-layout/Links.svelte";
  import Overlay from "$components/force-layout/Overlay.svelte";
  import State from "$components/force-layout/State.svelte";
  import Tezca from "$components/iconography/Tezca.svelte";
  import Tlalte from "$components/iconography/Tlalte.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Intro from "$components/introduction/Intro.svelte";
  import Scrolly from "$components/map/Scrolly.svelte";
  import Sources from "$components/Sources.svelte";
</script>

<script>
</script>

<Hero />

<Intro />
<!-- 
<Tezca />

<Tlalte /> -->

<Scrolly />
<!-- 
<State>
  <g slot="chart-svg">
    <Links />
  </g>
  <Gods slot="chart-html" />
  <g slot="chart-svg-overlay">
    <Overlay />
  </g>
  <Controls slot="controls" />
</State> -->

<Sources />
