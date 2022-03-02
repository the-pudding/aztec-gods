import variables from "$data/variables.json";

export const getMainGodColor = (importance) => {
  switch (importance) {
    case "primordial":
      return variables.category.primordial;
    case "creation":
      return variables.category.creation;
    case "elemental":
      return variables.category.elemental;
    case "human":
      return variables.category.human;
    case "secondary":
      return variables.category.secondary;
    default:
      return variables.category.secondary;
  }
};
export const getLightGodColor = (importance) => {
  switch (importance) {
    case "primordial":
      return variables.category.primordialLight;
    case "creation":
      return variables.category.creationLight;
    case "elemental":
      return variables.category.elementalLight;
    case "human":
      return variables.category.humanLight;
    case "secondary":
      return variables.category.secondaryLight;
    default:
      return variables.category.secondaryLight;
  }
};

export const getGodImportanceLabel = (importance) => {
  switch (importance) {
    case "primordial":
      return "primordial god";
    case "creation":
      return "creation god";
    case "elemental":
      return "elemental god";
    case "human":
      return "human god";
    case "secondary":
      return "secondary god";
    default:
      return " ";
  }
};

export const getLinkTypeLabel = (linkType) => {
  switch (linkType) {
    case "allLinks":
      return "All relations";
    case "cooperation":
      return "Equality";
    case "authority":
      return "Authority";
    case "aspect":
      return "Aspect";
    default:
      return linkType;
  }
};
export const getFieldLabel = (field) => {
  switch (field) {
    case "fertility":
      return "fertility";
    case "subsistence":
      return "subsistence";
    case "trade":
      return "trade";
    case "pleasure":
      return "pleasure";
    case "destruction":
      return "destruction";
    case "death":
      return "death";
    case "war":
      return "war";
    case "magic":
      return "magic";
    default:
      return field;
  }
};

export const getLabel = (id) => {
  switch (id) {
    case "face":
      return "face";

    default:
      return " ";
  }
};
