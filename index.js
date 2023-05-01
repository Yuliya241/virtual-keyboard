const { body } = document;
const wrapper = document.createElement('div');
const container = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const title = document.createElement('h1');
const info1 = document.createElement('p');
const info2 = document.createElement('p');

body.appendChild(wrapper);
wrapper.classList.add('wrapper');
wrapper.appendChild(title);
title.classList.add('title');
title.textContent = 'RSS Virtual-keyboard';
wrapper.appendChild(container);
container.classList.add('container');
container.appendChild(textarea);
textarea.classList.add('input');
container.appendChild(keyboard);
keyboard.classList.add('keyboard');
wrapper.appendChild(info1);
info1.classList.add('content');
info1.textContent = 'The virtual-keyboard was created in Windows';
wrapper.appendChild(info2);
info2.classList.add('content');
info2.textContent = 'The virtual-keyboard is able to switch between two language layouts: left ctrl + alt';

const keysEn = [['`', '~', '`', '~'], ['1', '!', '1', '!'], ['2', '@', '2', '@'], ['3', '#', '3', '#'], ['4', '$', '4', '$'],
  ['5', '%', '5', '%'], ['6', '^', '6', '^'], ['7', '&', '7', '&'], ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'],
  ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace'], ['Tab', 'Tab', 'Tab', 'Tab'],
  ['q', 'Q', 'Q', 'q'], ['w', 'W', 'W', 'w'], ['e', 'E', 'E', 'e'], ['r', 'R', 'R', 'r'], ['t', 'T', 'T', 't'],
  ['y', 'Y', 'Y', 'y'], ['u', 'U', 'U', 'u'], ['i', 'I', 'I', 'i'], ['o', 'O', 'O', 'o'], ['p', 'P', 'P', 'p'],
  ['[', '{', '[', '{'], [']', '}', ']', '}'], ['\\', '|', '\\', '|'], ['Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['a', 'A', 'A', 'a'], ['s', 'S', 'S', 's'], ['d', 'D', 'D', 'd'],
  ['f', 'F', 'F', 'f'], ['g', 'G', 'G', 'g'], ['h', 'H', 'H', 'h'], ['j', 'J', 'J', 'j'], ['k', 'K', 'K', 'k'],
  ['l', 'L', 'L', 'l'], [';', ':', ';', ':'], ['\'', '"', '\'', '"'], ['Enter', 'Enter', 'Enter', 'Enter'],
  ['Shift', 'Shift', 'Shift', 'Shift'], ['z', 'Z', 'Z', 'z'], ['x', 'X', 'X', 'x'], ['c', 'C', 'C', 'c'],
  ['v', 'V', 'V', 'v'], ['b', 'B', 'B', 'b'], ['n', 'N', 'N', 'n'], ['m', 'M', 'M', 'm'], [',', '<', ',', '<'],
  ['.', '>', '.', '>'], ['/', '?', '/', '?'], ['▲', '▲', '▲', '▲'], ['Shift', 'Shift', 'Shift', 'Shift'],
  ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 'Win', 'Win', 'Win'], ['Alt', 'Alt', 'Alt', 'Alt'], [' ', ' ', ' ', ' '],
  ['Alt', 'Alt', 'Alt', 'Alt'], ['◄', '◄', '◄', '◄'], ['▼', '▼', '▼', '▼'], ['►', '►', '►', '►'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']];

const eCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
  'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
  'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH',
  'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM',
  'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft',
  'ArrowDown', 'ArrowRight', 'ControlRight'];

const keysRu = [['ё', 'Ё', 'Ё', 'ё'], ['1', '!', '1', '!'], ['2', '"', '2', '"'], ['3', '№', '3', '№'], ['4', ';', '4', ';'],
  ['5', '%', '5', '%'], ['6', ':', '6', ':'], ['7', '?', '7', '?'], ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'],
  ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace'], ['Tab', 'Tab', 'Tab', 'Tab'],
  ['й', 'Й', 'Й', 'й'], ['ц', 'Ц', 'Ц', 'ц'], ['у', 'У', 'У', 'у'], ['к', 'К', 'К', 'к'], ['е', 'Е', 'Е', 'е'],
  ['н', 'Н', 'Н', 'н'], ['г', 'Г', 'Г', 'г'], ['ш', 'Ш', 'Ш', 'ш'], ['щ', 'Щ', 'Щ', 'щ'], ['з', 'З', 'З', 'з'],
  ['х', 'Х', 'Х', 'х'], ['ъ', 'Ъ', 'Ъ', 'ъ'], ['\\', '/', '\\', '/'], ['Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['ф', 'Ф', 'Ф', 'ф'], ['ы', 'Ы', 'Ы', 'ы'], ['в', 'В', 'В', 'в'],
  ['а', 'А', 'А', 'а'], ['п', 'П', 'П', 'п'], ['р', 'Р', 'Р', 'р'], ['о', 'О', 'О', 'о'], ['л', 'Л', 'Л', 'л'],
  ['д', 'Д', 'Д', 'д'], ['ж', 'Ж', 'Ж', 'Ж'], ['э', 'Э', 'Э', 'э'], ['Enter', 'Enter', 'Enter', 'Enter'],
  ['Shift', 'Shift', 'Shift', 'Shift'], ['я', 'Я', 'Я', 'я'], ['ч', 'Ч', 'Ч', 'ч'], ['с', 'С', 'С', 'с'],
  ['м', 'М', 'М', 'м'], ['и', 'И', 'И', 'и'], ['т', 'Т', 'Т', 'т'], ['ь', 'Ь', 'Ь', 'ь'], ['б', 'Б', 'Б', 'б'],
  ['ю', 'Ю', 'Ю', 'ю'], ['.', ',', '.', ','], ['▲', '▲', '▲', '▲'], ['Shift', 'Shift', 'Shift', 'Shift'],
  ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 'Win', 'Win', 'Win'], ['Alt', 'Alt', 'Alt', 'Alt'], [' ', ' ', ' ', ' '],
  ['Alt', 'Alt', 'Alt', 'Alt'], ['◄', '◄', '◄', '◄'], ['▼', '▼', '▼', '▼'], ['►', '►', '►', '►'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']];

const init = () => {
  for (let i = 0; i < 64; i += 1) {
    keyboard.insertAdjacentHTML('beforeend', `<div class="button btn${i}" id="${eCode[i]}"></div>`);
  }
};
init();

const btn = document.querySelectorAll('.button');

for (let i = 0; i < btn.length; i += 1) {
  btn[i].insertAdjacentHTML('beforeend', `<span class="ru ${localStorage.getItem('lang') === 'en' ? 'hidden' : ''}"></span>`);
  btn[i].insertAdjacentHTML('beforeend', `<span class="en ${localStorage.getItem('lang') === 'ru' ? 'hidden' : ''}"></span>`);
}

const spanEn = document.querySelectorAll('.en');
const spanRu = document.querySelectorAll('.ru');

for (let i = 0; i < 64; i += 1) {
  spanRu[i].insertAdjacentHTML('beforeend', `<span class="casedown">${keysRu[i][0]}</span>`);
  spanRu[i].insertAdjacentHTML('beforeend', `<span class="caseup hidden">${keysRu[i][1]}</span>`);
  spanRu[i].insertAdjacentHTML('beforeend', `<span class="caps hidden">${keysRu[i][2]}</span>`);
  spanRu[i].insertAdjacentHTML('beforeend', `<span class="shift-caps hidden">${keysRu[i][3]}</span>`);
  spanEn[i].insertAdjacentHTML('beforeend', `<span class="casedown">${keysEn[i][0]}</span>`);
  spanEn[i].insertAdjacentHTML('beforeend', `<span class="caseup hidden">${keysEn[i][1]}</span>`);
  spanEn[i].insertAdjacentHTML('beforeend', `<span class="caps hidden">${keysEn[i][2]}</span>`);
  spanEn[i].insertAdjacentHTML('beforeend', `<span class="shift-caps hidden">${keysEn[i][3]}</span>`);
}

const casedown = document.querySelectorAll('.casedown');
const casedownEn = document.querySelectorAll('.en .casedown');
const casedownRu = document.querySelectorAll('.ru .casedown');
const caps = document.querySelectorAll('.caps');
const capsEn = document.querySelectorAll('.en .caps');
const capsRu = document.querySelectorAll('.ru .caps');
const shiftCapsEn = document.querySelectorAll('.en .shift-caps');
const shiftCapsRu = document.querySelectorAll('.ru .shift-caps');
const caseUpEn = document.querySelectorAll('.en .caseup');
const caseUpRu = document.querySelectorAll('.ru .caseup');
const shiftLeft = document.querySelector('.btn42');
const shiftRight = document.querySelector('.btn54');
const capsLock = document.querySelector('.btn29');
const tab = document.querySelector('.btn14');
const controlRight = document.querySelector('.btn63');
const controlLeft = document.querySelector('.btn55');
const altRight = document.querySelector('.btn59');
const altLeft = document.querySelector('.btn57');
const space = document.querySelector('.btn58');
const arrowUp = document.querySelector('.btn53');
const arrowLeft = document.querySelector('.btn60');
const arrowDown = document.querySelector('.btn61');
const arrowRight = document.querySelector('.btn62');
const enter = document.querySelector('.btn41');
const backspace = document.querySelector('.btn13');
const del = document.querySelector('.btn28');

const changeLanguage = () => {
  if (localStorage.getItem('lang') === 'en') {
    localStorage.setItem('lang', 'ru');
  } else {
    localStorage.setItem('lang', 'en');
  }
  if (localStorage.getItem('lang') === 'en') {
    for (let i = 0; i < 64; i += 1) {
      spanEn[i].classList.remove('hidden');
      casedownEn[i].classList.remove('hidden');
      capsEn[i].classList.add('hidden');
      shiftCapsEn[i].classList.add('hidden');
      caseUpEn[i].classList.add('hidden');
      spanRu[i].classList.add('hidden');
      casedownRu[i].classList.add('hidden');
      capsRu[i].classList.add('hidden');
      shiftCapsRu[i].classList.add('hidden');
      caseUpRu[i].classList.add('hidden');
    }
  } else {
    for (let i = 0; i < 64; i += 1) {
      spanEn[i].classList.add('hidden');
      casedownEn[i].classList.add('hidden');
      capsEn[i].classList.add('hidden');
      shiftCapsEn[i].classList.add('hidden');
      caseUpEn[i].classList.add('hidden');
      spanRu[i].classList.remove('hidden');
      casedownRu[i].classList.remove('hidden');
      capsRu[i].classList.add('hidden');
      shiftCapsRu[i].classList.add('hidden');
      caseUpRu[i].classList.add('hidden');
    }
  }
};

let flag = false;

document.addEventListener('keydown', (e) => {
  textarea.focus();
  if (e.code === 'AltLeft') {
    flag = true;
  }
  if (e.code === 'ControlLeft' && flag) {
    flag = false;
    changeLanguage();
  }
  for (let i = 0; i < btn.length; i += 1) {
    if (btn[i].getAttribute('id') === e.code) {
      btn[i].classList.add('active');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.add('active');
      for (i = 0; i < casedown.length; i += 1) {
        casedown[i].classList.add('hidden');
        caps[i].classList.remove('hidden');
      }
      textarea.value += '';
    }
    if (e.code === 'Space') {
      space.classList.add('active');
    }
    if (e.code === 'Enter') {
      enter.classList.add('active');
      textarea.innerHTML += '\n';
    }
    if (e.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
    }
    if (e.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      controlRight.classList.add('active');
      controlLeft.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      controlLeft.classList.add('active');
      controlRight.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      altLeft.classList.remove('active');
    }
    if (e.code === 'AltLeft') {
      altRight.classList.remove('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }
    if (e.code === 'Tab') {
      tab.classList.add('active');
      textarea.value += '    ';
    }
    if (e.code === 'Backspace') {
      backspace.classList.add('active');
    }
  }
});

document.addEventListener('keyup', (e) => {
  textarea.focus();
  for (let i = 0; i < btn.length; i += 1) {
    if (btn[i].getAttribute('id') === e.code) {
      btn[i].classList.remove('active');
    }
    if (e.code === 'CapsLock') {
      capsLock.classList.remove('active');
      for (i = 0; i < casedown.length; i += 1) {
        casedown[i].classList.remove('hidden');
        caps[i].classList.add('hidden');
      }
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      controlRight.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      controlLeft.classList.remove('active');
    }
    if (e.code === 'Tab') {
      tab.classList.remove('active');
    }
  }
});

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('mousedown', () => {
    textarea.focus();
    if (i !== 29) {
      btn[i].classList.add('active');
      if (i === 63 || i === 59 || (i >= 54 && i <= 57) || i === 42 || i === 59) {
        textarea.value = textarea.value.slice(0, textarea.value.length);
      } if (i === 58) {
        textarea.value += ' ';
      } if (i === 41) {
        textarea.value += '\n';
      } if (i === 14) {
        textarea.value += '    ';
      } if (i === 13) {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
      } if ((i >= 0 && i <= 12) || (i >= 15 && i <= 27) || (i >= 30 && i <= 40)) {
        textarea.value += btn[i].innerText;
      } if ((i >= 43 && i <= 53) || (i >= 60 && i <= 62)) {
        textarea.value += btn[i].innerText;
      }
    }
  });
}

del.addEventListener('mousedown', () => {
  textarea.focus();
  del.classList.add('active');
  const position = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, position) + textarea.value.slice(position + 1);
  textarea.selectionStart = position + 1;
  textarea.selectionEnd = position;
});

capsLock.addEventListener('click', () => {
  textarea.focus();
  capsLock.classList.toggle('active');
  for (let i = 0; i < casedown.length; i += 1) {
    if (capsLock.classList.contains('active')) {
      casedown[i].classList.add('hidden');
      caps[i].classList.remove('hidden');
    } else {
      casedown[i].classList.remove('hidden');
      caps[i].classList.add('hidden');
    }
  }
  textarea.value += '';
});

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('mouseup', () => {
    textarea.focus();
    if (i !== 29) {
      btn[i].classList.remove('active');
    }
  });
}
