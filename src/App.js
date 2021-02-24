'use strict'
import MyNavBar from "./Components/Routing/MyNavBar"
import Home from "./Components/Routing/Home"
import About from "./Components/Routing/About"
import Product from "./Components/Routing/Product"
import FilmReq from "./Components/DataRequestsTutorial/FilmRequests"
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className = "App">
      <Router>
        <MyNavBar/>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/filmreq' exact>
          <FilmReq/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/product'>
          <Product/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
