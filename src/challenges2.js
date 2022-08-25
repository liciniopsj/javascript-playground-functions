// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(inString) {
  let numberExtractor = /\d+/g; //Parametros pro .match
  let numStringAry = inString.match(numberExtractor);
  let numberAry = numStringAry.map(Number); // convert to number
  let sumResult = 0;

  for (let sum of numberAry) {
    sumResult += sum;
  }
  if (sumResult === 1) return `1 copo de água`;
  return `${sumResult} copos de água`;
}
hydrate('1');
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
