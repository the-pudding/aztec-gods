<script>
  import TextButton from "$components/layout/TextButton.svelte";
  import Search from "$components/pantheon/Search.svelte";
  import { getGodImportanceLabel, getMainGodColor } from "$domain/getters";
  import loadImage from "$utils/loadImage";
  import { getContext } from "svelte";
  import doc from "$data/doc.json";

  const dev = process.env.NODE_ENV === "development";

  const { getName, getImportance, selection } = getContext("chart-state");

  let visible = "main-info";

  $: content =
    $selection && doc.main_gods.find((d) => d.id === $selection.name)
      ? doc.main_gods.find((d) => d.id === $selection.name).content
      : [];
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
          <h3 class="name">{@html getName($selection)}</h3>
          <p class="minibio">{@html $selection.bio}</p>
          {#if content}
            {#each content as c}
              <h4>{@html c.subtitle}</h4>
              {#each c.subcontent as p}
                <p>{@html p}</p>
              {/each}
            {/each}
          {/if}
        </div>
        <TextButton
          iconName="chevron-right"
          position="end"
          buttonLabel="sources"
          handleClick={() => (visible = "details")}
        />
      {:else}
        <div>
          <div class="type" style="color: {getMainGodColor(getImportance($selection))}">
            {getGodImportanceLabel(getImportance($selection))}
          </div>
          <h3 class="name">{@html getName($selection)}</h3>
          <div>
            <h4>Source of illustration</h4>
            <p>{@html $selection.source}</p>
          </div>
          <div>
            {#if $selection.spellings}
              <h4>Other spellings</h4>
              <p>{@html $selection.spellings}</p>
            {/if}
          </div>
        </div>
        <TextButton
          iconName="chevron-left"
          position="start"
          buttonLabel="bio"
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
  }
  .search {
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
  }
  .illustration {
    height: 45%;

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

  .minibio {
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

  h4 {
    margin-top: 0.7rem;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-highlight);
    /* border-bottom: 1px solid var(--color-highlight); */
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
