const calcular = require('../models/calculadora')

test('2 + 2 deve ser 4',()=>{
    excpect(calcular(2+2).toBe(4))
})
