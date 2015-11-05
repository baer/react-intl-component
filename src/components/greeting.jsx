"use strict";

import React from "react";
import {FormattedMessage} from "react-intl"
import {intlShape, injectIntl} from 'react-intl';

const Greeting = (props) => {
  return (
    <h1>
      <FormattedMessage
        id="greeting"
        description="Welcome greeting to the user"
        defaultMessage="Hello! How are you today?"
        />
    </h1>
  );
}

Greeting.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Greeting);
