import React from 'react';
import './App.css';
import Main from './Component/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {configureStore} from './Redux/configureStore';

const store = configureStore();
class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
         <div className="App">
           <Main />
         </div>
        </BrowserRouter>
      </Provider>
      );
  }

}

export default App;
