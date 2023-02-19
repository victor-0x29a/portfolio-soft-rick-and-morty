import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

// React-Router-Dom
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

// Global style
import GlobalStyle from "./global/index";
import Particulas from "./components/particles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <Particulas />
    <GlobalStyle />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </ReduxProvider>
);
