<script>
  import { onMount } from "svelte";

  export let moduleName = "Tezca";

  let Scrolly;
  onMount(async () => {
    const module = await import(`./${moduleName}.svelte`);
    Scrolly = module.default;
  });
</script>

<svelte:component this={Scrolly} />
