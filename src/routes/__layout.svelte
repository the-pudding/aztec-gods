<script>
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
</script>

<div class="bordered">
  <!-- <Header /> -->
  <main id="content">
    <slot />
  </main>
</div>

<style>
  .bordered {
    position: relative;
    /* margin: 6px; */
    box-shadow: 0 0 0 15px #222;
  }
</style>
