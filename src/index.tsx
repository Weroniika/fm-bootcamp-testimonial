import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { SliderProvider } from "./context/SliderContext";
import { Normalize } from "styled-normalize";
import { FontStyles, GlobalStyles } from "./shared/fonts";

ReactDOM.render(
  <React.StrictMode>
    <SliderProvider>
      <Normalize />
      <GlobalStyles />
      <FontStyles />
      <App />
    </SliderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
