import cardsDataBlue from "/data/mythicCards/blue.js";
import cardsDataBrown from "/data/mythicCards/brown.js"
import cardsDataGreen from "/data/mythicCards/green.js"
import ancientsData from "/data/ancients.js"

let azathoth = document.querySelector('.azathoth');
let cthulthu = document.querySelector('.cthulthu');
let logSothoth = document.querySelector('.logSothoth');
let shubNiggurath = document.querySelector('.shubNiggurath');
let blueF = 0;
let brownF = 0;
let greenF = 0;
let blueS = 0;
let brownS = 0;
let greenS = 0;
let blueT = 0;
let brownT = 0;
let greenT = 0;

function basicParam() {
  normal.classList.remove('activ');
  easy.classList.remove('activ');
  veryEasy.classList.remove('activ');
  veryHard.classList.remove('activ');
  hard.classList.remove('activ');
  result.classList.add('hidden');
  basicParamLevel();
}

function basicParamLevel() {
  randomCard.classList.add('hidden');
  shuffle.classList.remove('activ');
  document.getElementById('randomCard').innerHTML = "";
  document.getElementById("firstStage").style.color = 'white';
  document.getElementById("secondStage").style.color = 'white';
  document.getElementById("thirdStage").style.color = 'white';
}

function countCards(param) {
  blueF = ancientsData[param].firstStage.blueCards;
  brownF = ancientsData[param].firstStage.brownCards;
  greenF = ancientsData[param].firstStage.greenCards;
  blueS = ancientsData[param].secondStage.blueCards;
  brownS = ancientsData[param].secondStage.brownCards;
  greenS = ancientsData[param].secondStage.greenCards;
  blueT = ancientsData[param].thirdStage.blueCards;
  brownT = ancientsData[param].thirdStage.brownCards;
  greenT = ancientsData[param].thirdStage.greenCards;

  document.getElementById("blueF").innerHTML = ancientsData[param].firstStage.blueCards;
  document.getElementById("brownF").innerHTML = ancientsData[param].firstStage.brownCards;
  document.getElementById("greenF").innerHTML = ancientsData[param].firstStage.greenCards;

  document.getElementById("blueS").innerHTML = ancientsData[param].secondStage.blueCards;
  document.getElementById("brownS").innerHTML = ancientsData[param].secondStage.brownCards;
  document.getElementById("greenS").innerHTML = ancientsData[param].secondStage.greenCards;

  document.getElementById("blueT").innerHTML = ancientsData[param].thirdStage.blueCards;
  document.getElementById("brownT").innerHTML = ancientsData[param].thirdStage.brownCards;
  document.getElementById("greenT").innerHTML = ancientsData[param].thirdStage.greenCards;
}

function levelAzathoth() {
  basicParam();
  azathoth.classList.toggle('active');
  if (cthulthu.classList.contains('active')) {
    cthulthu.classList.toggle('active');
  }
  if (logSothoth.classList.contains('active')) {
    logSothoth.classList.toggle('active');
  }
  if (shubNiggurath.classList.contains('active')) {
    shubNiggurath.classList.toggle('active');
  }

  countCards(0);
}

function levelCthulthu() {
  cthulthu.classList.toggle('active');
  basicParam();
  if (azathoth.classList.contains('active')) {
    azathoth.classList.toggle('active');
  }
  if (logSothoth.classList.contains('active')) {
    logSothoth.classList.toggle('active');
  }
  if (shubNiggurath.classList.contains('active')) {
    shubNiggurath.classList.toggle('active');
  }

  countCards(1);
}

function levelLogSothoth() {
  basicParam();
  logSothoth.classList.toggle('active');
  if (cthulthu.classList.contains('active')) {
    cthulthu.classList.toggle('active');
  }
  if (azathoth.classList.contains('active')) {
    azathoth.classList.toggle('active');
  }
  if (shubNiggurath.classList.contains('active')) {
    shubNiggurath.classList.toggle('active');
  }

  countCards(2);
}

function levelShubNiggurath() {
  shubNiggurath.classList.toggle('active');
  basicParam();
  if (cthulthu.classList.contains('active')) {
    cthulthu.classList.toggle('active');
  }
  if (logSothoth.classList.contains('active')) {
    logSothoth.classList.toggle('active');
  }
  if (azathoth.classList.contains('active')) {
    azathoth.classList.toggle('active');
  }

  countCards(3);
}

azathoth.addEventListener('click', levelAzathoth);
cthulthu.addEventListener('click', levelCthulthu);
logSothoth.addEventListener('click', levelLogSothoth);
shubNiggurath.addEventListener('click', levelShubNiggurath);

/***************************************************************************/
let shuffle = document.querySelector('.shuffle');
let normal = document.querySelector('.normal');

let cards = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkLevel() {
  if (azathoth.classList.contains('active')) {
    countCards(0);
  } else if (cthulthu.classList.contains('active')) {
    countCards(1);
  } else if (logSothoth.classList.contains('active')) {
    countCards(2);
  } else if (shubNiggurath.classList.contains('active')) {
    countCards(3);
  }
}

normal.addEventListener('click', function () {
  basicParamLevel();
  easy.classList.remove('activ');
  hard.classList.remove('activ');
  veryEasy.classList.remove('activ');
  veryHard.classList.remove('activ');
  cards = [];
  checkLevel();
  let tempBlue = cardsDataBlue.slice().sort();
  let tempBrown = cardsDataBrown.slice().sort();
  let tempGreen = cardsDataGreen.slice().sort();
  normal.classList.add("activ");
  count = 0;
  let i = 0;
  if (shuffle.classList.contains('hidden')) {
    shuffle.classList.toggle('hidden');
  }
  let k = 0;
  while (i < blueF) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      cards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownF) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      cards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenF) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      cards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(cards);
  i = 0;
  let tempCards = [];
  while (i < blueS) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownS) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenS) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  tempCards = [];
  i = 0;
  while (i < blueT) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownT) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenT) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  return cards;
})

let easy = document.querySelector('.easy');
easy.addEventListener('click', function () {
  basicParamLevel();
  checkLevel();
  normal.classList.remove('activ');
  hard.classList.remove('activ');
  veryEasy.classList.remove('activ');
  veryHard.classList.remove('activ');
  cards = [];
  let tempBlue = [];
  for (let i = 0; i < cardsDataBlue.length; i++) {
    if (cardsDataBlue[i].difficulty === 'easy' || cardsDataBlue[i].difficulty === 'normal') {
      tempBlue.push(cardsDataBlue[i]);
    }
  }
  let tempBrown = [];
  for (let i = 0; i < cardsDataBrown.length; i++) {
    if (cardsDataBrown[i].difficulty === 'easy' || cardsDataBrown[i].difficulty === 'normal') {
      tempBrown.push(cardsDataBrown[i]);
    }
  }
  let tempGreen = [];
  for (let i = 0; i < cardsDataGreen.length; i++) {
    if (cardsDataGreen[i].difficulty === 'easy' || cardsDataGreen[i].difficulty === 'normal') {
      tempGreen.push(cardsDataGreen[i]);
    }
  }
  easy.classList.add("activ");
  count = 0;
  let i = 0;
  if (shuffle.classList.contains('hidden')) {
    shuffle.classList.toggle('hidden');
  }
  let k = 0;
  while (i < blueF) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      cards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownF) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      cards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenF) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      cards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(cards);
  i = 0;
  let tempCards = [];
  while (i < blueS) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownS) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenS) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  tempCards = [];
  i = 0;
  while (i < blueT) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownT) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenT) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  return cards;

})

let hard = document.querySelector('.hard');
hard.addEventListener('click', function () {
  basicParamLevel();
  checkLevel();
  normal.classList.remove('activ');
  easy.classList.remove('activ');
  veryHard.classList.remove('activ');
  veryEasy.classList.remove('activ');
  cards = [];
  let tempBlue = [];
  for (let i = 0; i < cardsDataBlue.length; i++) {
    if (cardsDataBlue[i].difficulty === 'hard' || cardsDataBlue[i].difficulty === 'normal') {
      tempBlue.push(cardsDataBlue[i]);
    }
  }
  let tempBrown = [];
  for (let i = 0; i < cardsDataBrown.length; i++) {
    if (cardsDataBrown[i].difficulty === 'hard' || cardsDataBrown[i].difficulty === 'normal') {
      tempBrown.push(cardsDataBrown[i]);
    }
  }
  let tempGreen = [];
  for (let i = 0; i < cardsDataGreen.length; i++) {
    if (cardsDataGreen[i].difficulty === 'hard' || cardsDataGreen[i].difficulty === 'normal') {
      tempGreen.push(cardsDataGreen[i]);
    }
  }
  hard.classList.add("activ");
  count = 0;
  let i = 0;
  if (shuffle.classList.contains('hidden')) {
    shuffle.classList.toggle('hidden');
  }
  let k = 0;
  while (i < blueF) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      cards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownF) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      cards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenF) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      cards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(cards);
  i = 0;
  let tempCards = [];
  while (i < blueS) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownS) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenS) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  tempCards = [];
  i = 0;
  while (i < blueT) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownT) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenT) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  return cards;
})

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let randomCard = document.querySelector('.randomCards');
let count = 0;
shuffle.addEventListener('click', function () {
  shuffle.classList.add('activ');
  randomCard.classList.toggle('hidden');
  count = 0;
})

randomCard.addEventListener('click', function () {
  let temp = cards[count].id;
  let img = "<img src='assets/MythicCards/" + temp + ".png'/>";
  document.getElementById('randomCard').innerHTML = img;
  count++;

  if (temp.includes('blue')) {
    blueF--;
    if (blueF < 0) {
      blueS--;
      if (blueS < 0) {
        blueT--;
        if (blueT > -1) {
          document.getElementById("blueT").innerHTML = blueT;
        }
      } else {
        document.getElementById("blueS").innerHTML = blueS;
      }
    } else {
      document.getElementById("blueF").innerHTML = blueF;
    }
  }

  if (temp.includes('brown')) {
    brownF--;
    if (brownF < 0) {
      brownS--;
      if (brownS < 0) {
        brownT--;
        if (brownT > -1) {
          document.getElementById("brownT").innerHTML = brownT;
        }
      } else {
        document.getElementById("brownS").innerHTML = brownS;
      }
    } else {
      document.getElementById("brownF").innerHTML = brownF;
    }
  }

  if (temp.includes('green')) {
    greenF--;
    if (greenF < 0) {
      greenS--;
      if (greenS < 0) {
        greenT--;
        if (greenT > -1) {
          document.getElementById("greenT").innerHTML = greenT;
        }
      } else {
        document.getElementById("greenS").innerHTML = greenS;
      }
    } else {
      document.getElementById("greenF").innerHTML = greenF;
    }
  }

  if (blueF === 0 && brownF === 0 && greenF === 0) {
    document.getElementById("firstStage").style.color = 'blue';
  }
  if (blueS === 0 && brownS === 0 && greenS === 0) {
    document.getElementById("secondStage").style.color = 'blue';
  }
  if (blueT === 0 && brownT === 0 && greenT === 0) {
    document.getElementById("thirdStage").style.color = 'blue';
  }
  if (blueF <= 0 && blueS <= 0 && blueT <= 0 && brownF <= 0 && brownS <= 0 && brownT <= 0 && greenF <= 0 && greenS <= 0 && greenT <= 0) {
    randomCard.classList.add('hidden');
    basicParam();
    result.classList.remove('hidden');
    azathoth.classList.remove('active');
    cthulthu.classList.remove('active');
    logSothoth.classList.remove('active');
    shubNiggurath.classList.remove('active');
  }
  return count, blueF, blueS, blueT, brownF, brownS, brownT, greenF, greenS, greenT;
})
let result = document.querySelector('.result');
let veryEasy = document.querySelector('.veryEasy');
veryEasy.addEventListener('click', function () {
  basicParamLevel();
  checkLevel();
  normal.classList.remove('activ');
  easy.classList.remove('activ');
  hard.classList.remove('activ');
  veryHard.classList.remove('activ');
  cards = [];
  let tempBlue = [];
  for (let i = 0; i < cardsDataBlue.length; i++) {
    if (cardsDataBlue[i].difficulty === 'easy') {
      tempBlue.push(cardsDataBlue[i]);
    }
  }
  let tempBrown = [];
  for (let i = 0; i < cardsDataBrown.length; i++) {
    if (cardsDataBrown[i].difficulty === 'easy') {
      tempBrown.push(cardsDataBrown[i]);
    }
  }
  let tempGreen = [];
  for (let i = 0; i < cardsDataGreen.length; i++) {
    if (cardsDataGreen[i].difficulty === 'easy') {
      tempGreen.push(cardsDataGreen[i]);
    }
  }
  if (tempBlue.length < blueF + blueS + blueT) {
    let i = 0;
    while (tempBlue.length < (blueF + blueS + blueT)) {
      if (cardsDataBlue[i].difficulty === 'normal') {
        tempBlue.push(cardsDataBlue[i]);
      }
      i++;
    }
  }
  if (tempBrown.length < (brownF + brownS + brownT)) {
    let i = 0;
    while (tempBrown.length < (brownF + brownS + brownT)) {
      if (cardsDataBrown[i].difficulty === 'normal') {
        tempBrown.push(cardsDataBrown[i]);
      }
      i++;
    }
  }
  if (tempGreen.length < greenF + greenS + greenT) {
    let i = 0;
    while (tempGreen.length < greenF + greenS + greenT) {
      if (cardsDataGreen[i].difficulty === 'normal') {
        tempGreen.push(cardsDataGreen[i]);
      }
      i++;
    }
  }
  veryEasy.classList.add("activ");
  count = 0;
  let i = 0;
  if (shuffle.classList.contains('hidden')) {
    shuffle.classList.toggle('hidden');
  }
  let k = 0;
  while (i < blueF) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      cards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownF) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      cards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenF) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      cards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(cards);
  i = 0;
  let tempCards = [];
  while (i < blueS) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownS) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenS) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  tempCards = [];
  i = 0;
  while (i < blueT) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownT) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenT) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  return cards;
})

let veryHard = document.querySelector('.veryHard');
veryHard.addEventListener('click', function () {
  basicParamLevel();
  checkLevel();
  normal.classList.remove('activ');
  easy.classList.remove('activ');
  hard.classList.remove('activ');
  veryEasy.classList.remove('activ');
  cards = [];
  let tempBlue = [];
  for (let i = 0; i < cardsDataBlue.length; i++) {
    if (cardsDataBlue[i].difficulty === 'hard') {
      tempBlue.push(cardsDataBlue[i]);
    }
  }
  let tempBrown = [];
  for (let i = 0; i < cardsDataBrown.length; i++) {
    if (cardsDataBrown[i].difficulty === 'hard') {
      tempBrown.push(cardsDataBrown[i]);
    }
  }
  let tempGreen = [];
  for (let i = 0; i < cardsDataGreen.length; i++) {
    if (cardsDataGreen[i].difficulty === 'hard') {
      tempGreen.push(cardsDataGreen[i]);
    }
  }
  if (tempBlue.length < blueF + blueS + blueT) {
    let i = 0;
    while (tempBlue.length < (blueF + blueS + blueT)) {
      if (cardsDataBlue[i].difficulty === 'normal') {
        tempBlue.push(cardsDataBlue[i]);
      }
      i++;
    }
  }
  if (tempBrown.length < (brownF + brownS + brownT)) {
    let i = 0;
    while (tempBrown.length < (brownF + brownS + brownT)) {
      if (cardsDataBrown[i].difficulty === 'normal') {
        tempBrown.push(cardsDataBrown[i]);
      }
      i++;
    }
  }
  if (tempGreen.length < greenF + greenS + greenT) {
    let i = 0;
    while (tempGreen.length < greenF + greenS + greenT) {
      if (cardsDataGreen[i].difficulty === 'normal') {
        tempGreen.push(cardsDataGreen[i]);
      }
      i++;
    }
  }
  veryHard.classList.add("activ");
  count = 0;
  let i = 0;
  if (shuffle.classList.contains('hidden')) {
    shuffle.classList.toggle('hidden');
  }
  let k = 0;
  while (i < blueF) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      cards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownF) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      cards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenF) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      cards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(cards);
  i = 0;
  let tempCards = [];
  while (i < blueS) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownS) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenS) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  tempCards = [];
  i = 0;
  while (i < blueT) {
    k = getRandomInt(tempBlue.length);
    if (tempBlue.indexOf(k)) {
      tempCards.push(tempBlue[k]);
      tempBlue.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < brownT) {
    k = getRandomInt(tempBrown.length);
    if (tempBrown.indexOf(k)) {
      tempCards.push(tempBrown[k]);
      tempBrown.splice(k, 1);
      i++;
    }
  }
  i = 0;
  while (i < greenT) {
    k = getRandomInt(tempGreen.length);
    if (tempGreen.indexOf(k)) {
      tempCards.push(tempGreen[k]);
      tempGreen.splice(k, 1);
      i++;
    }
  }
  shuffleCards(tempCards);
  cards = cards.concat(tempCards);
  return cards;
})