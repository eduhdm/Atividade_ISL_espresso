const espresso = require('espresso-logic-minimizer');
const inputs_atv1 = require('./inputs_atv_01').inputs;
const inputs_atv2 = require('./inputs_atv_02').inputs;


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


console.log('----------------------------------------------------');
console.log('QUESTAO 01');
console.log('----------------------------------------------------');

Object.keys(inputs_atv1.questao_1).forEach(key => {
  console.log('----------------------------------------------------');
  console.log(`item ${key}`);
  console.log(`resultado gerado pelo espresso: `, espresso.minimize(inputs_atv1.questao_1[key]));
  console.log(`expressão traduzida: `, minimizationParser(inputs_atv1.questao_1[key], espresso.minimize(inputs_atv1.questao_1[key])));
  console.log('----------------------------------------------------');
});

console.log('----------------------------------------------------');
console.log('Questão 02');
console.log('resultado espresso = ', espresso.minimize(inputs_atv1.questao_2));
console.log('----------------------------------------------------');

console.log('----------------------------------------------------');
console.log('Questão 03');
console.log('resultado espresso = ', espresso.minimize(inputs_atv1.questao_3));
console.log('----------------------------------------------------');
console.log('----------------------------------------------------');
console.log('QUESTAO 02');
console.log('----------------------------------------------------');

Object.keys(inputs_atv2.questao_1.a).forEach(key => {
  console.log('----------------------------------------------------');
  console.log(`item ${key}`);
  console.log(`resultado gerado pelo espresso: `, espresso.minimize(inputs_atv2.questao_1.a[key]));
  console.log(`expressão traduzida: `, minimizationParser(inputs_atv2.questao_1.a[key], espresso.minimize(inputs_atv2.questao_1.a[key])));
  console.log('----------------------------------------------------');
});