<div
      class="god"
      style="width:{rad}px; height:{rad}px; 
  left:{$xScale(god[$linkHighlight].x)}px; top:{$yScale(god[$linkHighlight].y)}px; 
  opacity:{opacity};
  background-color: {bgColor};
  filter: {blur};
  transform: translate(-50%, -50%);
  z-index: {isScaled ? 200 : 20};
  border: {borderWidth}px solid {getMainGodColor(god.importance)};
  "
      on:mouseenter={() => interaction.highlight(getName(god))}
      on:focus={() => interaction.highlight(getName(god))}
      on:mouseout={() => interaction.highlight(undefined)}
      on:blur={() => interaction.highlight(undefined)}
    >
      {isMain ? name : ""}
    </div>