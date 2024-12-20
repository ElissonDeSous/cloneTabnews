const calculadora = require('../models/calculadora.js')

test('somar numeros', () => {
  const calcu = calculadora.somar(2,2)
  expect(calcu).toBe(4)
});
test('somar numeros', () => {
  const calcu = calculadora.somar(200,2)
  expect(calcu).toBe(202)
});
