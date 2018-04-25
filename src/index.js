const espresso = require('espresso-logic-minimizer');
const inputs = require('./inputs').inputs;

const minimizationParser = (input, list) => {
  let inputVars = input[2]
    .split(" ")
    .filter(char => char !== '.ilb');

  let finalExpression = '';
  list.forEach((expression, index) => {
    [...expression].map((bit, index) => {
      if(index >= inputVars.length) return;
      if (bit === '1') {
        finalExpression += inputVars[index];
      } else if(bit === '0'){
        finalExpression += `${inputVars[index]}'`;        
      }
    });
    finalExpression += index !== list.length - 1 ? ' + ' : '';
  });
  return finalExpression;
}


Object.keys(inputs.questao_1).forEach(key => {
  console.log('----------------------------------------------------');  
  console.log(`item ${key}`);
  console.log(`resultado gerado pelo espresso: `, espresso.minimize(inputs.questao_1[key]));  
  console.log(`expressão traduzida: `, minimizationParser(inputs.questao_1[key], espresso.minimize(inputs.questao_1[key])));
  console.log('----------------------------------------------------');    
});

console.log('----------------------------------------------------');   
console.log('Questão 02');     
console.log('resultado espresso = ', espresso.minimize(inputs.questao_2));
console.log('----------------------------------------------------');    

console.log('----------------------------------------------------');    
console.log('Questão 03');     
console.log('resultado espresso = ', espresso.minimize(inputs.questao_3));
console.log('----------------------------------------------------');    



