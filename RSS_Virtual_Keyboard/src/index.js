import "./assets/styles/css.css";
import "./assets/styles/style.scss";

import {keyRow1, valueKeysArray} from './row_1';


const body = document.querySelector('body');

const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard-container';
  body.appendChild(keyboardContainer);

const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  keyboardContainer.appendChild(textArea);

const keysContainer = document.createElement('div');
  keysContainer.className = 'keys-container';
  keyboardContainer.appendChild(keysContainer);

  keysContainer.appendChild(keyRow1);
 
  //valueKeysArray.forEach(value => createRow1(value));
