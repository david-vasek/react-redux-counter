import React from "react";
import "./App.css";
import CounterApp from "./components/CounterApp";

import { Provider } from "react-redux";
import { Store } from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
