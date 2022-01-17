<script>
  import doc from "$data/doc.json";

  import { tezca } from "$components/iconography/tezca";

  import Section from "$components/layout/Section.svelte";
  import { scaleLinear } from "d3";

  let selected = "face";
  const data = doc["tezca-steps"];

  const positions = {
    face: {
      cx: 0.3,
      cy: 0.4,
      r: 1200
    },
    spear: {
      cx: 0.74,
      cy: 0.25,
      r: 900
    },
    mirror: {
      cx: 0.78,
      cy: 0.43,
      r: 1300
    },
    headdress: {
      cx: 0.45,
      cy: 0.25,
      r: 1800
    },
    foot: {
      cx: 0.3,
      cy: 0.83,
      r: 900
    },
    skin: {
      cx: 0.7,
      cy: 0.3,
      r: 700
    },
    pectoral: {
      cx: 0.42,
      cy: 0.59,
      r: 900
    },
    nose: {
      cx: 0.27,
      cy: 0.48,
      r: 400
    },
    ezpitzal: {
      cx: 0.3,
      cy: 0.2,
      r: 700
    }
  };

  $: text = data.filter((d) => d.id === selected)[0].text ?? "Pick something";

  $: scale = scaleLinear().domain([0, 1]).range([0, 10640]);
  $: x = scale(positions[selected] ? positions[selected].cx : 0.5);
  $: y = scale(positions[selected] ? positions[selected].cy : 0.5);
  $: r = positions[selected] ? positions[selected].r : 0;
</script>

<Section>
  <div class="wrapper">
    {#each data as d}
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
        <g mask={`url(#mask-${1})`}>{@html tezca}</g>

        <mask id={`mask-${1}`}>
          <rect x="0" y="0" width="10640" height="10640" fill="white" fill-opacity={0.1} />
          <circle cx={x} cy={y} {r} fill="white" />
        </mask>

        <circle cx={x} cy={y} {r} fill="none" stroke="#C74300" stroke-width="20" />
      </svg>
    </div>
  </div>
</Section>

<style>
  .wrapper {
    width: 100%;
    max-width: 500px;
    margin: 0;
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
