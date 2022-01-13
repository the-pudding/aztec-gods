export const getGeometricPositions = (width, height, god) => {
  switch (god) {
    case "Huitzilopochtli":
      return { x: width * 0.5, y: height * 0.65 };
    case "Mayahuel":
      return { x: width * 0.5, y: height * 0.2 };
    case "Mictlantecuhtli":
      return { x: width * 0.35, y: height * 0.35 };
    case "Mixcoatl":
      return { x: width * 0.5, y: height * 0.8 };
    case "Ometeotl":
      return { x: width * 0.5, y: height * 0.5 };
    case "Quetzalcoatl":
      return { x: width * 0.35, y: height * 0.5 };
    case "Tezcatlipoca":
      return { x: width * 0.5, y: height * 0.35 };
    case "Tlaloc":
      return { x: width * 0.35, y: height * 0.65 };
    case "Tlaltecuhtli":
      return { x: width * 0.65, y: height * 0.35 };
    case "Xipe Totec":
      return { x: width * 0.65, y: height * 0.5 };
    case "Xiuhtecuhtli":
      return { x: width * 0.65, y: height * 0.65 };
    case "Xochiquetzal":
      return { x: width * 0.2, y: height * 0.5 };
    case "Yacatecuhtli":
      return { x: width * 0.8, y: height * 0.5 };
    default:
      return { x: width * 0.5, y: height * 0.5 };
  }
};
