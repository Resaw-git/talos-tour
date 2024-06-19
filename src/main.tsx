import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const node = document.getElementById("root");
const root = createRoot(node!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);