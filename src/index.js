import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';
import ButtonCounter from './components/ButtonCounter';
import LigthSwitch from './components/LigthSwitch';

ReactDOM.render(
  <div>
    <ClickityClick/>
    <ButtonCounter/>
    <LigthSwitch/>
  </div>,
  document.getElementById('root')
);
