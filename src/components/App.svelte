<script context="module">
  export const prerender = true;
</script>

<script>
  import Links from "$components/force-layout/Links.svelte";
  import State from "$components/force-layout/State.svelte";
  import Gods from "$components/force-layout/Gods.svelte";
  import Controls from "$components/force-layout/Controls.svelte";
  import Scrolly from "$components/layout/Scrolly.svelte";
  import Section from "$components/layout/Section.svelte";
  import Tezcatlipoca from "$svg/optimized/Tezcatlipoca.svg";
  import { tez } from "$components/explain/tezcatlipoca";
  console.log(typeof Tezcatlipoca);
  console.log(tez);
</script>

<div>
  <Section>
    <svg
      viewBox="0 0 5320 5320"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
    >
      <g mask="url(#myMask)">{@html tez}</g>
      <mask id="myMask">
        <rect x="0" y="0" width="5320" height="5320" fill="white" fill-opacity={0.1} />
        <circle cx="2000" cy="2000" r="700" fill="white" />
      </mask>
      <circle cx="2000" cy="2000" r="700" fill="none" stroke="#C74300" stroke-width="20" />
    </svg>
  </Section>
  <Scrolly />
  <!-- <State>
    <Links slot="chart-svg" />
    <Gods slot="chart-html" />
    <Controls slot="controls" />
  </State> -->
</div>
