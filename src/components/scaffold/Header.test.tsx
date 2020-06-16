import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

it(`Header renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Header id="Header" />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
})