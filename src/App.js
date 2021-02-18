import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/"><Signup /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/signin"><Signin /></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
