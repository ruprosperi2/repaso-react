import React from 'react'
import ReactDOM from 'react-dom/client'
// import {HelloWorldApp} from "./HelloWorldApp.tsx";
// import {FirstApp} from "./FirstApp.tsx";
import {CounterApp} from "./CounterApp.tsx";
import "./style.css"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CounterApp value={0}/>
    </React.StrictMode>,
)
