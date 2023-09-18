import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import {HookApp} from "./components";
// import {CounterApp} from "./01-useState/CounterApp.tsx";
// import {CounterAppWithCustomHook} from "./01-useState/CounterAppWithCustomHook.tsx";
import {SimpleForm} from "./02-useEffect/Simpleform.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
);
