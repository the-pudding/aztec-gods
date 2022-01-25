<script>
  export let title = "";
  export let author = "";
  export let url = "";
</script>

<li>
  {#if url || url !== ""}
    <span class="title"><a href={url}>{title}</a></span>
  {:else}
    <span class="title">{title}</span>
  {/if}
  <span class="author">{author}</span>
</li>
