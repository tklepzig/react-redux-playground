import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./app.scss";
import MyData from "./components/MyData/MyData";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <MyData />
    </Provider>,
    document.getElementById("root"));
