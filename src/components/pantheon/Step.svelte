<script>
  export let step = "";
  export let selected = false;
  export let activeStep = false;

  import TextButton from "$components/layout/TextButton.svelte";
  import StepResourceList from "$components/pantheon/StepResourceList.svelte";

  import { fade, fly } from "svelte/transition";
  import { getLightGodColor, getMainGodColor } from "$domain/getters";

  // FIXME: should step be in in the State context
  // to avoid finding selected God in the full list?
  import nodes from "$data/gods/tidy/nodes.json";
  // Highlighted God
  $: god = nodes.find((n) => n.name === activeStep.id) ?? undefined;

  $: mainContent = { subtitle: step.name, text: step.minibio };
  $: godSource = god ? { subtitle: "source", text: god.source } : undefined;
  $: godSpellings = god ? { subtitle: "other spellings", text: god.spellings } : undefined;

  const makeLinkList = (url, title, author) =>
    `<li style="margin-bottom: .4rem;"><a href=${url}>${title}</a>, ${author}</li>`;

  $: resources =
    god && step.sources_group
      ? {
          subtitle: "resources",
          text: `<ul>${step.sources_group
            .map((s) => makeLinkList(s.url, s.title, s.author))
            .join("")}</ul>`
        }
      : {};
  // $: console.log(step.sources_group);
  // Step content
  $: content = step.content
    ? step.content.flatMap((content, i) => {
        return content.subcontent.map((subcontent) => ({
          subtitle: content.subtitle,
          text: subcontent
        }));
      })
    : [];

  $: texts = god
    ? [mainContent, ...content, godSource, godSpellings, resources]
    : [mainContent, ...content];
  $: items = texts.map((c, i) => {
    const previous = i > 0 ? texts[i - 1].subtitle : false;
    const next = i < texts.length - 1 ? texts[i + 1].subtitle : false;
    return { previous, next, ...c };
  });

  // For horizontal navigation
  let visible = 0;
</script>

<div class="step" data-step={step.id} class:selected>
  <div class="step-inner">
    {#each items as item, i}
      {#if visible === i}
        <!-- in:fly={{ x: 400, duration: 1000 }}
      out:fly={{ x: -400, duration: 1000 }} -->
        <div
          class="step-item"
          style="border-color: {getMainGodColor(step.type)}; background-color: {getLightGodColor(
            step.type
          )};"
        >
          <div class="step-text" style="font-size: {i === 0 ? `1.2rem` : `1rem`}">
            {#if item.subtitle}
              <div class="step-subtitle" style="color: {getMainGodColor(step.type)};">
                {@html item.subtitle}
              </div>
            {/if}

            {@html item.text}
          </div>

          <nav class="buttons" style="color: {getMainGodColor(step.type)};">
            <TextButton
              disabled={!item.previous}
              position="start"
              iconName="chevron-left"
              buttonLabel={item.previous}
              handleClick={() => {
                visible = i - 1;
              }}
            />
            <TextButton
              disabled={!item.next}
              position="end"
              iconName="chevron-right"
              buttonLabel={item.next}
              handleClick={() => {
                visible = i + 1;
              }}
            />
          </nav>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .step {
    width: 100%;
    max-width: 24rem;
    margin: 40rem auto 2rem auto;

    opacity: 0.4;
    transition: opacity 400ms;

    pointer-events: all;
    position: relative;
  }
  .step:last-child {
    margin-bottom: 140vh;
  }
  .selected {
    opacity: 1;
  }

  /* .step-inner {
    position: absolute;
    top: 0;
    left: 0;
  } */
  .step-item {
    max-width: 24rem;
    height: 250px;
    padding: 0.825rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-width: 2px;
    border-style: solid;
    border-radius: 2px;

    font-size: 0.825rem;

    overflow-y: scroll;
  }
  .step-text {
    overflow-y: scroll;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .step-subtitle {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 1rem;
  }

  /* img {
    max-width: 35rem;
    margin: 0 auto;
  } */

  @media only screen and (min-width: 50em) {
    .step-item {
      height: 350px;
    }
  }
</style>
