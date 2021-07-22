import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import SwitchComponent from "./components/SwitchComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { persistor, store} = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>  
      <PersistGate
        loading={null}
        persistor={persistor}
      >  
          <BrowserRouter>
              <SwitchComponent />
          </BrowserRouter>
        </PersistGate>   
      </Provider> 
    );
  }
}

export default App;
