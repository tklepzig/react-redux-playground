import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./app.scss";
import { rootReducer } from "./components/rootReducer";
import Start from "./components/Start";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <Start />
    </Provider>,
    document.getElementById("root"));
