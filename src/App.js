import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Application ToDo avec Redux</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
