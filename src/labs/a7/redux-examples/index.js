import React from "react";
import HelloReduxExampleComponent
 from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import { configureStore }
  from '@reduxjs/toolkit';
import Todos from "./todos-component";
const store = configureStore({
 reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </Provider>
    );
};

export default ReduxExamples