<script>
  export let name = "mask-name";
  export let imgPath = "";
  export let selected = "";
  export let steps = [];
  export let positions = [];
  export let imageRange = [0, 1];

  import { scaleLinear } from "d3";

  $: text = steps.filter((d) => d.id === selected)[0].text ?? "Pick something";

  $: scale = scaleLinear().domain([0, 1]).range(imageRange);
  $: x = scale(positions[selected] ? positions[selected].cx : 0.5);
  $: y = scale(positions[selected] ? positions[selected].cy : 0.5);
  $: r = positions[selected] ? positions[selected].r : 0;
</script>

<div class="wrapper">
  {#each steps as d}
    <button on:click={() => (selected = d.id)}>{d.id}</button>
  {/each}

  <div class="description">
    {text}
  </div>
  <div class="image">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 10640 10640"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
    >
      <g mask={`url(#mask-${name})`}>{@html imgPath}</g>

      <mask id={`mask-${name}`}>
        <rect x="0" y="0" width="10640" height="10640" fill="white" fill-opacity={0.1} />
        <circle cx={x} cy={y} {r} fill="white" />
      </mask>

      <circle cx={x} cy={y} {r} fill="none" stroke="#C74300" stroke-width="20" />
    </svg>
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .description {
    height: 60px;
  }

  button {
    margin: 0 0.5rem 0.5rem 0;
    background: #fff;
    padding: 0.5rem 1rem;
  }
  circle {
    transition: cx 700ms, cy 700ms, r 700ms;
  }
</style>
