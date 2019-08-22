import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import Dates from "./Dates"
import "./styles.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => (
  //Provider envuelve a toda la app para acceder al estado desde cualquier componente que se configure
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Content}></Route>
        <Route path="/datos" component={Dates}></Route>
      </Switch>
    </Router>

  </Provider>

)


export default App;
