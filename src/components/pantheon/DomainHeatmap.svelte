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
    <span class:active={god[domain] > 0}>{domain}</span>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }

  span {
    padding: 0.05rem 0.15rem;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;

    border-radius: 2px;
    border: 1px solid;
    border-color: var(--color-gray-medium);
    color: var(--color-gray-medium);

    font-size: 10px;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    transition: background 200ms;
  }

  .active {
    border-color: var(--color-black);
    color: var(--color-black);
    background: var(--color-background-4);
  }
</style>
