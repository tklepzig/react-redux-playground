import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./app.scss";
import reducers from "./services/reducers";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <p>TODO</p>
    </Provider>,
    document.getElementById("root"));
