<script>
  import { getContext } from "svelte";

  export let god;

  const {
    bounds,
    points,
    getName,
    getRelationType,
    getImportance,
    interaction,
    links,
    radius,
    linkTypeColorScale,
    godTypeColorScale,
    mutableNodes,
    radiusScale,
    mutableLinks
  } = getContext("chart-state");
</script>

<div
  class="god"
  style="width:{radiusScale(getImportance(god))}px; height:{radiusScale(
    getImportance(god)
  )}px; left:{god.x}px; top:{god.y}px; border: {$interaction && $interaction === getName(god)
    ? 4
    : 1}px solid {godTypeColorScale(getRelationType(god))}; background-image: url('/img/{getName(
    god
  )}.jpg'); 
        "
>
  {getName(god)}
</div>

<style>
  .god {
    background: aliceblue;
    font-size: 8px;

    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
</style>
