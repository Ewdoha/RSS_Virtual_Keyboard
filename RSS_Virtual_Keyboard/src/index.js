import "./assets/styles/css.css";
import "./assets/styles/style.scss";

//import {keyRow1, valueKeysArray} from './row_1';
let valueKeysRow1 = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"];
let valueKeysRow2 = ["Tab","q","w","e","r","t","y","u","i","o","p","[","]","/","Del"];
let valueKeysRow3 = ["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"];
let valueKeysRow4 = ["Shift","z","x","c","v","b","n","m",",",".","/","-","^","Shift"];
let valueKeysRow5 = ["Ctrl","Win","Alt"," ","Alt","-","-","-","Ctrl"];

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

  for (let i = 0; i < valueKeysRow1.length; i++) {
    let keyRow1 = document.createElement('div');
    keyRow1.className = 'key keyRow-1';
    keyRow1.textContent = valueKeysRow1[i];
    keysContainer.appendChild(keyRow1);
  }

  for (let i = 0; i < valueKeysRow2.length; i++) {
    let keyRow2 = document.createElement('div');
    keyRow2.className = 'key keyRow-2';
    keyRow2.textContent = valueKeysRow2[i];
    keysContainer.appendChild(keyRow2);
  }

  for (let i = 0; i < valueKeysRow3.length; i++) {
    let keyRow3= document.createElement('div');
    keyRow3.className = 'key keyRow-3';
    keyRow3.textContent = valueKeysRow3[i];
    keysContainer.appendChild(keyRow3);
  }

  for (let i = 0; i < valueKeysRow4.length; i++) {
    let keyRow4 = document.createElement('div');
    keyRow4.className = 'key keyRow-4';
    keyRow4.textContent = valueKeysRow4[i];
    keysContainer.appendChild(keyRow4);
  }

  for (let i = 0; i < valueKeysRow5.length; i++) {
    let keyRow5 = document.createElement('div');
    keyRow5.className = 'key keyRow-5';
    keyRow5.textContent = valueKeysRow5[i];
    keysContainer.appendChild(keyRow5);
  }

