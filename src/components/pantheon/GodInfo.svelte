<script>
  import TextButton from "$components/layout/TextButton.svelte";
  import DomainHeatmap from "$components/pantheon/DomainHeatmap.svelte";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import Search from "$components/pantheon/Search.svelte";

  import loadImage from "$utils/loadImage";
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";

  const dev = process.env.NODE_ENV === "development";

  const { getName, getImportance, selection } = getContext("chart-state");

  let visible = "main-info";
</script>

<div class="wrapper">
  <div class="search">
    <Search />
    <TextButton
      disabled={!$selection}
      buttonLabel="Reset selection"
      handleClick={() => selection.lowlight()}
    />
  </div>
  {#if $selection}
    <!-- < show all Gods -->
    <!-- transition:fade -->
    <div class="illustration">
      {#await loadImage(`${dev ? "/" : "/aztec-gods/"}assets/gods/${$selection.id}.svg`)}
        <span>Loading...</span>
      {:then img}
        <img src={img.src} alt="Image of {getName($selection)}." />
      {:catch}
        <span>Sorry no image for {getName($selection)}</span>
      {/await}
    </div>

    <div class="god-info-details">
      {#if visible === "main-info"}
        <div>
          <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
            {getGodImportanceLabel(getImportance($selection))}
          </div>
          <div class="name">{@html getName($selection)}</div>
          <!-- <DomainChart god={$selection} /> -->
          <DomainHeatmap god={$selection} />
          <p class="minibio">{@html $selection.bio}</p>
        </div>
        <TextButton
          iconName="chevron-right"
          position="end"
          buttonLabel="details"
          handleClick={() => (visible = "details")}
        />
      {:else}
        <div>
          <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
            {getGodImportanceLabel(getImportance($selection))}
          </div>
          <div class="name">{@html getName($selection)}</div>
          <div class="illu-source">
            <span>Source of illustration:</span>
            {@html $selection.source}
          </div>
          <div class="other-spellings">
            {#if $selection.spellings}
              <span>Other spellings:</span>
              {@html $selection.spellings}
            {/if}
          </div>
        </div>
        <TextButton
          iconName="chevron-left"
          position="start"
          buttonLabel="back"
          handleClick={() => (visible = "main-info")}
        />
      {/if}
    </div>
  {/if}
</div>

<style>
  .wrapper {
    /* background-color: orange; */
    height: calc(100vh - 80px);
    padding: 1rem 2rem;
    display: none;

    overflow: scroll;

    margin-bottom: 1rem;
    /* background: var(--color-background-4);
    border-left: 3px solid var(--color-highlight); */
  }
  .search {
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
  }
  .illustration {
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 2px solid aliceblue; */
  }
  .illustration img {
    height: 100%;
  }
  .god-info-details {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* border: 1px solid greenyellow; */
  }

  .minibio,
  .illu-source {
    padding-top: 0.5rem;
  }
  .type {
    font-size: 0.7rem;
    line-height: 1.2;
    /* letter-spacing: 0.06em; */
    text-align: center;
    text-transform: uppercase;
  }
  .name {
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-align: center;
    text-transform: uppercase;
    word-break: break-all;
  }
  .other-spellings,
  .illu-source {
    margin-bottom: 0.5rem;
  }
  .other-spellings span,
  .illu-source span {
    display: block;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-size: 0.825rem;
    color: var(--color-gray-dark);
  }
  @media only screen and (min-width: 50em) {
    .wrapper {
      display: block;
    }
    .type {
      font-size: 1.2rem;
    }
    .name {
      font-size: 2.2rem;
    }
  }
</style>
