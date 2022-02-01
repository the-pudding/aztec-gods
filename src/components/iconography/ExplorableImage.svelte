<script>
  export let name = "mask-name";
  export let imgPath = "";
  export let selected = "";
  export let steps = [];
  export let positions = [];
  export let imageRange = [0, 1];

  import { fade } from "svelte/transition";
  import { scaleLinear } from "d3";

  $: text = steps.filter((d) => d.id === selected)[0].text ?? "Pick something";

  $: scale = scaleLinear().domain([0, 1]).range(imageRange);
</script>

<div class="wrapper">
  <div class="controls">
    <!-- FIXME: for a11y, use tab/panel semantics -->
    <div class="buttons">
      {#each steps as d}
        <button on:click={() => (selected = d.id)} class:selected={selected === d.id}>{d.id}</button
        >
      {/each}
    </div>
    <div class="description">
      {@html text}
    </div>
  </div>

  <div class="image-wrapper">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 10640 10640"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;overflow:visible"
    >
      <g mask={`url(#mask-${name})`}>{@html imgPath}</g>

      <mask transition:fade id={`mask-${name}`}>
        <rect x="0" y="0" width="10640" height="10640" fill="white" fill-opacity={0.1} />
        {#each positions[selected] as m}
          <ellipse
            cx={scale(m.cx)}
            cy={scale(m.cy)}
            rx={scale(m.rx)}
            ry={scale(m.ry)}
            fill="white"
            transition:fade
          />
        {/each}
      </mask>

      {#each positions[selected] as m}
        <ellipse
          class="circle-overlay"
          transition:fade
          cx={scale(m.cx)}
          cy={scale(m.cy)}
          rx={scale(m.rx)}
          ry={scale(m.ry)}
          fill="none"
          stroke-width="50"
        />
      {/each}
    </svg>
  </div>
</div>

<style>
  .wrapper {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .image-wrapper {
    width: 100%;
    max-width: 40rem;
    margin: 0;
  }
  .description {
    height: 90px;
    margin: 1rem 0 0 0;
    text-align: center;
    font-size: 1rem;
  }

  ellipse {
    transition: cx 700ms, cy 700ms, rx 700ms, ry 700ms;
  }
  ellipse.circle-overlay {
    stroke: var(--color-highlight);
  }

  @media only screen and (min-width: 30em) {
    .description {
      height: 56px;
      font-size: 1.25rem;
    }
  }
</style>
