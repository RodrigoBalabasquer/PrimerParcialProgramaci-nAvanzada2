import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages';
//import {Context} from './Context';

function App() {
  return (
    <div className="App">
      {/*<Context.Provider
        value={{
          marca:"UNT FRA",
          color:"dark"
          }}
      >*/}
      <Home/>
      {/*</Context.Provider>*/}
    </div>
  );
}

export default App;
