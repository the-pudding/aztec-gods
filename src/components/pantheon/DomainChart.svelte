<script>
  export let god;
  const domains = [
    "animals",
    "celestial",
    "trade",
    "death",
    "violence",
    "food",
    "knowledge",
    "fertility",
    "excess",
    "nature",
    "pleasure"
  ];

  const RATIO = 10;
</script>

<div>
  {#each domains as domain}
    <div style="position: relative">
      <div
        style=" background-color: white; position: absolute; left:0; top:0; width: {god[domain] *
          RATIO}px; height: 12px;"
      />
      <div style="position:relative">{domain}</div>
    </div>
  {/each}
</div>

<style>
  div {
    font-size: 10px;

    overflow: visible;
  }
</style>
