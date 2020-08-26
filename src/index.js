import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./reset.css";
import "./index.css";
import "./assets/fonts.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ScrollToTop from "./components/hooks/scrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();