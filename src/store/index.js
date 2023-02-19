import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
const AppReducer = (
  state = {
    tema: {
      color: "white",
      background: "#000000",
      special: "#a9f04d",
      mode: "dark",
    },
  },
  action
) => {
  switch (action.type) {
    case "SET_THEME":
      if (action.value === "dark") {
        return {
          ...state,
          tema: {
            color: "white",
            background: "#000000",
            special: "#a9f04d",
            mode: "dark",
          },
        };
      } else {
        return {
          ...state,
          tema: {
            color: "black",
            background: "#FFFFF",
            special: "#a9f04d",
            mode: "light",
          },
        };
      }
    default:
      return state;
  }
};

export default createStore(AppReducer, composeWithDevTools());
