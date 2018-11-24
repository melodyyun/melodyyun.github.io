import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./partials/Home";
import ProductPage from "./partials/project-pages/ProductPages";
import UfcPage from "./partials/project-pages/UfcPage";
import FlipGivePage from "./partials/project-pages/FlipGivePage";
import ThankYou from "./partials/ThankYou";
import NoMatch from "./partials/NoMatch";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/khabib-vs-mcgregor" component={UfcPage} />
            <Route path="/projects/flipgive" component={FlipGivePage} />
            <Route path="/projects/product" component={ProductPage} />
            <Route path="/thank-you" component={ThankYou} />
            <Route component={NoMatch} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
