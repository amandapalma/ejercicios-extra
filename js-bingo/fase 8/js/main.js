/* eslint-disable no-console */
'use strict';

const newNumberBtn = document.querySelector('.js-new-number-btn');
const playBtn = document.querySelector('.js-play-btn');
const cardNumbers = [];

// start page functions

const init = () => {
  console.log('Se ha iniciado la página');
  console.log('Generar 20 números (no repetidos) para Mi cartón');
  generateRandomNumbers();
  paintCardNumbers();
};

const generateRandomNumbers = function() {
  for (let i = 0; i < 20; i += 1) {
    const randomNumber = generateRandomNumber(100);
    cardNumbers.push(randomNumber);
  }
};

const generateRandomNumber = function(max) {
  return Math.ceil(Math.random() * max);
};

// dom listeners

const handleNewNumber = () => {
  console.log('Se ha pulsado en: Saca una bolita');
  playRound();
};

const handlePlay = () => {
  console.log('Se ha pulsado en: Play');
  setPlay();
  playRound();
};

// functions

const setPlay = () => {
  console.log('Activar el modo automático');
};

const playRound = () => {
  console.log('Jugamos una ronda entera');
  createNewBingoNumber();
  paintBingoNumbers();
  paintCardNumbers();
  isThereBingo();
};

const createNewBingoNumber = () => {
  console.log('Generar un nuevo número (no repetido) para Bolitas');
};

const paintBingoNumbers = () => {
  console.log('Repintar Bolitas');
};

const paintCardNumbers = () => {
  console.log('Repintar todos los números de Mi cartón');
  console.log('Repintar cada número de Mi cartón');

  let htmlCode = '';
  // for (let i = 0; i < cardNumbers.length; i = i + 1) {
  //   htmlCode += `<li class="number">${cardNumbers[i]}</li>`;
  // }

  let cardNumber;
  for (cardNumber of cardNumbers) {
    htmlCode += `<li class="number">${cardNumber}</li>`;
  }

  const cardNumbersElement = document.querySelector('.js-card-numbers');
  cardNumbersElement.innerHTML = htmlCode;

  console.log('¿El número de Mi cartón está en Bolitas?');
  if (true) {
    paintMatchedCardNumber();
  } else {
    paintUnmatchedCardNumber();
  }
};

const paintMatchedCardNumber = () => {
  console.log('- Sí: Pintar con fondo verde');
};

const paintUnmatchedCardNumber = () => {
  console.log('- No: Pintar con fondo blanco');
};

const isThereBingo = () => {
  console.log('¿Han salido todos los números?');
  if (false) {
    console.log('- Sí');
    showBingoMessage();
    hideButtons();
  } else {
    console.log('- No');
    isPlayingMode();
  }
};

const showBingoMessage = () => {
  console.log('Mostrar mensaje de Han cantado Bingo!!!');
};

const hideButtons = () => {
  console.log('Ocultar botones de Saca una bolita y Play');
};

const isPlayingMode = () => {
  console.log('¿Estoy en modo automático?');
  if (false) {
    console.log('- Sí');
    createNewBingoNumberAgain();
  } else {
    console.log('- No');
  }
};

const createNewBingoNumberAgain = () => {
  console.log('Esperar un segundo y volver a empezar');
  setTimeout(() => {
    playRound();
  }, 1000);
};

newNumberBtn.addEventListener('click', handleNewNumber);
playBtn.addEventListener('click', handlePlay);

// init page

init();
