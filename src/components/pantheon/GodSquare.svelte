<script>
  import variables from "$data/variables.json";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import loadImage from "$utils/loadImage";
  const dev = process.env.NODE_ENV === "development";
  export let god;
  export let duration;
  export let isMain;
  export let width;
  export let height;
  export let x;
  export let y;
  export let zIndex;
  export let opacity;
  export let color;
  export let borderWidth;

  $: console.log(god.id, duration);
  $: tweenParameters = {
    delay: 0,
    duration: duration,
    easing: cubicIn
  };
  const tweenedWidth = tweened(undefined, tweenParameters);
  const tweenedX = tweened(undefined, tweenParameters);
  const tweenedY = tweened(undefined, tweenParameters);

  $: $tweenedWidth = width;
  $: $tweenedX = x;
  $: $tweenedY = y;
</script>

<div
  class="god"
  style="width:{$tweenedWidth}px; height:{$tweenedWidth}px; 
  left:{$tweenedX}px; top:{$tweenedY}px; 
  background-color: {!isMain ? color : variables.color.white};
  transform: translate(-50%, -50%);
  z-index: {zIndex};
  border: {borderWidth}px solid {color};
  opacity:{opacity};
  "
>
  <!-- {#if isMain}
    {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${god.id}.svg`)}
      <span>Loading...</span>
    {:then img}
      <img src={img.src} alt={god.id} />
    {/await}
  {/if} -->
</div>

<style>
  .god {
    position: absolute;

    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    /* transition: opacity 500ms, transform 500ms, border-width 500ms, left 1000ms, top 1000ms,
      width 1000ms, height 1000ms; */

    pointer-events: none;
  }
</style>
