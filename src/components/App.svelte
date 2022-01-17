<script context="module">
  export const prerender = true;
  import doc from "$data/doc.json";
</script>

<script>
  import Sources from "$components/Sources.svelte";
  import Heading from "$components/layout/Heading.svelte";
  import Intro from "$components/introduction/Intro.svelte";
  import Hero from "$components/introduction/Hero.svelte";
  import Links from "$components/force-layout/Links.svelte";
  import State from "$components/force-layout/State.svelte";
  import Gods from "$components/force-layout/Gods.svelte";
  import Controls from "$components/force-layout/Controls.svelte";
  import Scrolly from "$components/map/Scrolly.svelte";
  import Tezca from "$components/iconography/Tezca.svelte";
  import Tlalte from "$components/iconography/Tlalte.svelte";
  import Geometric from "$components/map/Geometric.svelte";
</script>

<Hero />

<Intro />

<Tezca />

<Tlalte />

<Heading>Contextual Elements</Heading>

<Scrolly />

<State>
  <Links slot="chart-svg" />
  <Gods slot="chart-html" />
  <Controls slot="controls" />
</State>

<Sources />
