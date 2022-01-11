<script context="module">
  export const prerender = true;
</script>

<script>
  import Demo from "$components/helpers/Demo.svelte";
  import Links from "$components/force-layout/Links.svelte";
  import State from "$components/force-layout/State.svelte";
  import Gods from "$components/force-layout/Gods.svelte";
  import Controls from "$components/force-layout/Controls.svelte";
</script>

<Demo />
<main>
  <State>
    <Links slot="chart-svg" />
    <Gods slot="chart-html" />
    <Controls slot="controls" />
  </State>
</main>
