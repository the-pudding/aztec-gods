<script context="module">
  export const prerender = true;
</script>

<script>
  import Dots from "$components/force-layout/Dots.svelte";
  import State from "$components/force-layout/State.svelte";
</script>

<h1>Gods Pantheon Cartography</h1>

<div>
  <State>
    <Dots />
  </State>
</div>
