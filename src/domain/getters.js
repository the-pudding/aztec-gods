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
