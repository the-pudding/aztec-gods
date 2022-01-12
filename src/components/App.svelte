<script context="module">
  export const prerender = true;
</script>

<script>
  import Links from "$components/force-layout/Links.svelte";
  import State from "$components/force-layout/State.svelte";
  import Gods from "$components/force-layout/Gods.svelte";
  import Controls from "$components/force-layout/Controls.svelte";
  import Scrolly from "$components/layout/Scrolly.svelte";
</script>

<div>
  <!-- <Scrolly /> -->
  <State>
    <Links slot="chart-svg" />
    <Gods slot="chart-html" />
    <Controls slot="controls" />
  </State>
</div>
