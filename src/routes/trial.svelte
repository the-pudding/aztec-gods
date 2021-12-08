<script context="module">
  export const prerender = true;
</script>

<script>
  import Dots from "$components/force-layout/Dots.svelte";
  import State from "$components/force-layout/State.svelte";
  import Controls from "$components/force-layout/Controls.svelte";
</script>

<h1>Gods Pantheon Cartography</h1>
<main>
  <State>
    <Dots />

    <div slot="controls"><Controls /></div>
  </State>
</main>

<style>
  h1 {
    margin: 1rem;
  }
</style>
