import "./assets/styles/css.css";
import "./assets/styles/style.scss";

const body = document.querySelector('body');

function createKeyboardContainer () {
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard-container';
  body.appendChild(keyboardContainer);
  createTextArea (keyboardContainer);
  createKeysContainer (keyboardContainer);
}

function createTextArea (keyboardContainer) {
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  keyboardContainer.appendChild(textArea);
}

function createKeysContainer (keyboardContainer) {
  const keysContainer = document.createElement('div');
  keysContainer.className = 'keys-container';
  keyboardContainer.appendChild(keysContainer);
}



createKeyboardContainer ();
