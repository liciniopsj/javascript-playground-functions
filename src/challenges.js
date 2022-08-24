// Desafio 1
function compareTrue(p1,p2) {
  return p1 && p2;
}

// Desafio 2
function calcArea(base,height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(" ");
  return result;
}

// Desafio 4
function concatName(arrayOfStrings) {
  return arrayOfStrings[arrayOfStrings.length -1].concat(", ", arrayOfStrings[0]);
}

// Desafio 5
function footballPoints(wins,ties) {
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function checkHighestNumber(arrayOfNumbers){ //Encontra o maior valor no array
  let compare = arrayOfNumbers[0];
  
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

function highestCount(arrayOfNumbers) {
  checkHighestNumber(arrayOfNumbers);
  let compare = arrayOfNumbers[checkHighestNumber(arrayOfNumbers)], hits = 0;
  
  for (let index in arrayOfNumbers){
    if (compare === arrayOfNumbers[index]){
      hits += 1;
    }
  }

  return hits;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
