import "./assets/styles/css.css";
import "./assets/styles/style.scss";

let capsFlag = false;

let valueKeysRow1 = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"];
let valueKeysRow2 = ["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del"];
let valueKeysRow3 = ["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"];
let valueKeysRow4 = ["Shift","z","x","c","v","b","n","m",",",".","/","-","top","Shift"];
let valueKeysRow5 = ["Ctrl","Win","Alt"," ","Alt","left","bottom","right","Ctrl"];

let valueKeysRow1Caps = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"];
let valueKeysRow2Caps = ["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","Del"];
let valueKeysRow3Caps = ["CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter"];
let valueKeysRow4Caps = ["Shift","Z","X","C","V","B","N","M",",",".","/","-","top","Shift"];
let valueKeysRow5Caps = ["Ctrl","Win","Alt"," ","Alt","left","bottom","right","Ctrl"];

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


  let keysArray = document.querySelectorAll('.key');
  let keysArrayRow4 = document.querySelectorAll('.keyRow-4');
  let keysArrayRow5 = document.querySelectorAll('.keyRow-5');

  let keyBackspace;
  keysArray.forEach(el => el.textContent == 'Backspace' ? keyBackspace = el : false);
  let keyTab;
  keysArray.forEach(el => el.textContent == 'Tab' ? keyTab = el : false);
  let keyCapsLock;
  keysArray.forEach(el => el.textContent == 'CapsLock' ? keyCapsLock = el : false);
  let keyEnter;
  keysArray.forEach(el => el.textContent == 'Enter' ? keyEnter = el : false);
  let keyShiftLeft;
  keysArrayRow4.forEach((el,ind) => ind === 0 ? keyShiftLeft = el : false);
  let keyShiftRight;
  keysArrayRow4.forEach((el,ind) => ind === 13 ? keyShiftRight = el : false);
  let keyCtrlLeft;
  keysArrayRow5.forEach((el,ind) => ind === 0 ? keyCtrlLeft = el : false);
  let keyCtrlRight;
  keysArrayRow5.forEach((el,ind) => ind === 8 ? keyCtrlRight = el : false);
  let keyWin;
  keysArray.forEach(el => el.textContent == 'Win' ? keyWin = el : false);
  let keyAltLeft;
  keysArrayRow5.forEach((el,ind) => ind === 2 ? keyAltLeft = el : false);
  let keyAltRight;
  keysArrayRow5.forEach((el,ind) => ind === 4 ? keyAltRight = el : false);
  let keyTop;
  keysArray.forEach(el => el.textContent == 'top' ? keyTop = el : false);
  let keyLeft;
  keysArray.forEach(el => el.textContent == 'left' ? keyLeft = el : false);
  let keyBottom;
  keysArray.forEach(el => el.textContent == 'bottom' ? keyBottom = el : false);
  let keyRight;
  keysArray.forEach(el => el.textContent == 'right' ? keyRight = el : false);

  let textAreaText = "";

  keysArray.forEach(key => key.addEventListener('click', function (event) {
    if (event.target.textContent === 'Backspace' || event.target.textContent === 'Tab' || event.target.textContent === 'Del' 
    || event.target.textContent === 'CapsLock' || event.target.textContent === 'Enter' || event.target.textContent === 'Shift'
    || event.target.textContent === 'Ctrl' || event.target.textContent === 'Alt' || event.target.textContent === 'Win'
    || event.target.textContent === 'top' || event.target.textContent === 'left' || event.target.textContent === 'right' || event.target.textContent === 'bottom') {
      false;
    } else {  
      if (capsFlag) {
        textAreaText += event.target.innerText.toUpperCase();
        textArea.value = textAreaText;
      } else {
        textAreaText += event.target.innerText;
        textArea.value = textAreaText;
      }  
    }
  }));
  
  keyBackspace.addEventListener('click', function () {
    textAreaText = textAreaText.slice(0, -1);
    textArea.value = textAreaText;
  })

  keyTab.addEventListener('click', function () {
    textAreaText = textAreaText.concat('        ');
    textArea.value = textAreaText;
  })

  keyCapsLock.addEventListener('click', function () {
    console.log(capsFlag);
    //valueKeysRow1 = valueKeysRow1Caps;
    //keysArray.forEach(el => el.remove());
    if (capsFlag) {  
      capsFlag = false;  
    } else { 
      capsFlag = true;  
    } 
  }) 
 
  keyEnter.addEventListener('click', function () {
    textAreaText += '\r\n';
    textArea.value = textAreaText;
  })

  
//console.log(textArea.value);

/*  const end = textArea.value.length;

    textArea.setSelectionRange(end, end);
    textArea.focus();
    
     textArea.focus(); 
    textArea.moveStart();*/

  