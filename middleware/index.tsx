export const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Impreso desde el middleware");
      console.log(action);
      next(action);
    };
  };
};

export const featuring = (store) => (next) => (actionInfo) => {
  if (actionInfo.payload) {
    const featured = [
      {
        ...actionInfo.payload[0],
        name: "El Porto",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png",
        },
      },
      ...actionInfo.payload,
    ];
    const updatedActionInfo = {
      ...actionInfo,
      payload: featured,
    };
    next(updatedActionInfo);
  }
};
