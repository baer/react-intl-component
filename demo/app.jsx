/*global document:false*/
import {IntlProvider} from 'react-intl';
import React from "react";
import ReactDOM from "react-dom";

import {GreetingComponent} from "../src/index";

const messages = {
  "greeting": "Override"
}

class App extends React.Component {
  render() {
    return (
      <IntlProvider locale="en" messages={messages}>
        <GreetingComponent />
      </IntlProvider>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
