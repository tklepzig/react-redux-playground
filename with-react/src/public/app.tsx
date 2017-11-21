import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./app.scss";
import Start, { reducers } from "./components/Start";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Start />
    </Provider>,
    document.getElementById("root"));
