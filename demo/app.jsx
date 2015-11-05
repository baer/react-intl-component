/*global document:false*/

import React from "react";
import ReactDOM from "react-dom";
import {Greeting} from "../src/index";
import {IntlProvider} from 'react-intl';

const messages = {
  id: "greeting",
  defaultMessage: "Override!"
};

class App extends React.Component {
  render() {
    return (
      <IntlProvider locale="en" messages={messages}>
        <Greeting />
      </IntlProvider>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
