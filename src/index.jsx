import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import ReduxProvider from "./hocs/redux-provider";

import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ReduxProvider>
            <App />
        </ReduxProvider>
    </React.StrictMode>
);

reportWebVitals();
