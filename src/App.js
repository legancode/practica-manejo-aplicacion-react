import React from 'react';
import NavBar from './NavBar';
import Content from './Content';
import "./styles.css"
import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => (
  //Provider envuelve a toda la app para acceder al estado desde cualquier componente que se configure
  <Provider store={store}>
    <NavBar />
    <Content />
  </Provider>
)


export default App;
