<script>
  export let fullBleed = false;
  export let id = undefined;
</script>

<section {id} class:centered={!fullBleed}>
  <slot />
</section>

<style>
  section {
    margin: 0 auto;
  }

  .centered {
    padding: 0 1rem;
    max-width: 90rem;
  }
</style>
