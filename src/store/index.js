import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import axios from "axios";
import * as api from '../config'

const composeEnchanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchanser(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api
        })
    )
));

export default store;