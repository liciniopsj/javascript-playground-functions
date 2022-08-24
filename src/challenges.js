// Desafio 1*
function compareTrue(p1,p2) {
  return p1 && p2;
}

// Desafio 2*
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3*
function splitSentence(sentence) {
  let result = sentence.split(" ");
  return result;
}

// Desafio 4*
function concatName(arrayOfStrings) {
  return arrayOfStrings[arrayOfStrings.length -1].concat(", ", arrayOfStrings[0]);
}

// Desafio 5*
function footballPoints(wins,ties) {
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6*
function checkHighestNumber(arrayOfNumbers){ //Encontra o maior valor no array
  let compare = arrayOfNumbers[0]; // iniciado com o primeiro valor do array pra não ter problema com numeros negativos.
  
  for (let index in arrayOfNumbers){
     if (arrayOfNumbers[index] > compare){
      compare = arrayOfNumbers[index];
     }
  
  }
  
  for (let index in arrayOfNumbers){
      if (compare === arrayOfNumbers[index]){
          return index;
      }
  }
}

function highestCount(arrayOfNumbers) { // Conta e devolve os hits.
  checkHighestNumber(arrayOfNumbers);
  let compare = arrayOfNumbers[checkHighestNumber(arrayOfNumbers)], hits = 0;
  
  for (let index in arrayOfNumbers){
    if (compare === arrayOfNumbers[index]){
      hits += 1;
    }
  }

  return hits;
}

// Desafio 7*
function catAndMouse(mouse,cat1,cat2) {
  let cat1Pos = 0, cat2Pos = 0;
  cat1Pos = Math.abs(cat1 - mouse);
  cat2Pos = Math.abs(cat2 - mouse);
  //Math.abs - Absolute number / https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

  if (cat1Pos === cat2Pos) return 'os gatos trombam e o rato foge';
  if (cat1Pos < cat2Pos) return 'cat1';

  return 'cat2';

}

// Desafio 8
// let test = [2, 15, 7, 9, 45];
function fizzBuzz(aryOfNumbers) {
  let result = [];
  
  for (let index = 0;index < aryOfNumbers.length; index += 1){
    if (aryOfNumbers[index] % 3 === 0 && aryOfNumbers[index] % 5 === 0){
      result.push('fizzBuzz');
    }else{
      if (aryOfNumbers[index] % 3 === 0) result.push('fizz');
      if (aryOfNumbers[index] % 5 === 0) result.push('buzz');
    }
    if (!(aryOfNumbers[index] % 3 === 0) && !(aryOfNumbers[index] % 5 === 0)) result.push('bug!');
  }
  
  return result;
}
// fizzBuzz(test);

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
