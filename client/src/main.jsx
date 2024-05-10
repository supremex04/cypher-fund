import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {ThirdwebProvider} from "@thirdweb-dev/react"
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import dotenv from "dotenv";
dotenv.config();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThirdwebProvider activeChain={Sepolia} clientId= {process.env.CLIENT_ID}>
        <Router>
        <StateContextProvider>
        <App/>

        </StateContextProvider>
        </Router>
    </ThirdwebProvider>

)

