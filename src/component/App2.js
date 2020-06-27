import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './clientFiles/navigation';
import FixedInformation from './clientFiles/fixedInformation';
import Home from './clientFiles/home';
import About from './clientFiles/about';
import Resume from './clientFiles/resume';
import Contact from './clientFiles/contact';

import Portfolio from './clientFiles/portfolio';
import Blog from './clientFiles/blog';

function App2() {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <FixedInformation></FixedInformation>
        <Navigation></Navigation>

        <Router>
          <Switch>
            <Route path="/adminPaneli/homePage">
              <Home></Home>
            </Route>

            <Route path="/adminPaneli/aboutPage">
              <About></About>
            </Route>

            <Route path="/adminPaneli/resumePage">
              <Resume></Resume>
            </Route>

            <Route path="/adminPaneli/contactPage">
              <Contact></Contact>
            </Route>

            <Route path="/adminPaneli/portfolioPage">
              <Portfolio></Portfolio>
            </Route>

            <Route path="/adminPaneli/blogPage">
              <Blog></Blog>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App2;
