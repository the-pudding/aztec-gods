<script>
  export let activeStep = "";
  import loadImage from "$utils/loadImage";
  import { getLightGodColor, getMainGodColor } from "$domain/getters";
  import points from "../../data/gods/tidy/gods.json";
  import { getGeometricPositions } from "./layout";
  const dev = process.env.NODE_ENV === "development";
  $: promise = loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${activeStep.id}.png`);
  let width = 0;
  $: height = width;

  $: center = [width / 2, height / 2];

  const margins = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };

  $: bounds = {
    width,
    height,
    margins,
    center,
    chartWidth: width - margins.left - margins.right,
    chartHeight: height - margins.top - margins.bottom
  };

  $: gods = points
    .filter((g) => g.importance !== "secondary")
    .map((p) => {
      return {
        x: getGeometricPositions(width, height, p.name).x,
        y: getGeometricPositions(width, height, p.name).y,
        ...p
      };
    });

  $: side = width * 0.12;
  $: borderWidth = side * 0.05;
</script>

<div class="chart-wrapper" bind:clientWidth={width}>
  {#if width > 0}
    <svg class="chart-svg" width={bounds.width} height={bounds.height}>
      <!-- <rect x={0} y={0} width={bounds.width} height={bounds.height} fill="#efefef" /> -->
      <slot name="chart-svg" />
    </svg>
    <div class="chart-html" style="width:{bounds.width}px; height:{bounds.height}px;">
      <div style="transform: translate({bounds.margins.left}px, {bounds.margins.top}px)">
        {#each gods as god}
          {#if activeStep.id === god.name}
            <div
              class="name"
              style="left:{god.x}px; top:{god.y}px; color: {getMainGodColor(
                god.importance
              )}; transform: translate(-50%, -{(height * 0.13) / 2 + 11}px);"
            >
              {god.name}
            </div>
          {/if}
          {#await promise}
            <div
              class="god"
              style="width:{side + 6}px; height:{side + 6}px; left:{god.x}px; top:{god.y}px; 
            background-color: {getLightGodColor(god.importance)};
            filter:{activeStep.id === god.name
                ? `unset`
                : activeStep.type === god.importance
                ? `blur(1px)`
                : `blur(4px)`};
            border: {borderWidth}px solid {getMainGodColor(god.importance)};
            "
            />
          {:then img}
            <div
              class="god"
              style="width:{side + 6}px; height:{side + 6}px; left:{god.x}px; top:{god.y}px; 
            background-color: {getLightGodColor(god.importance)};
            background-image: {`url(${img.src})`};
            filter:{activeStep.id === god.name
                ? `unset`
                : activeStep.type === god.importance
                ? `blur(1px)`
                : `blur(4px)`};
            border: {borderWidth}px solid {getMainGodColor(god.importance)};
            "
            />
          {/await}
        {/each}
      </div>
    </div>
  {/if}
</div>

<!-- opacity: {activeStep.type === god.importance ? 1 : 0.2}; -->
<style>
  .name {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    position: absolute;
    transform: translateX(-50%);
    text-transform: uppercase;
  }
  .god {
    font-size: 8px;

    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;

    transition: filter 200ms;
  }

  .chart-html,
  .chart-svg {
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }
</style>
