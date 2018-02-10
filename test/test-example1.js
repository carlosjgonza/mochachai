
const expect = require('chai').expect
const operacionesMath = require('../dist/src/example1').default

describe('Pruebas del archivo example1', function(){
  it('Si el operador es suma, realizar una suma de los elementos', function(){
    let resultSuma = operacionesMath(5, 6, 'SUMA')
    expect(resultSuma.status).to.equal('ok')
    expect(resultSuma.result).to.equal(11)
  })

  it('Si el operador es resta, realizar una resta de los elementos', function(){
    let resultResta = operacionesMath(8, 5, 'RESTA')
    expect(resultResta.status).to.equal('ok')
    expect(resultResta.result).to.equal(3)
  })

  it('Si el operador es suma, realizar una suma de los elementos', function(){
    let resultMultiplicacion = operacionesMath(7, 1, 'MULTIPLICACION')
    expect(resultMultiplicacion.status).to.equal('ok')
    expect(resultMultiplicacion.result).to.equal(7)
  })

  it('Si el operador es suma, realizar una suma de los elementos', function(){
    let resultDivision = operacionesMath(20, 4, 'DIVISION')
    expect(resultDivision.status).to.equal('ok')
    expect(resultDivision.result).to.equal(5)
  })

  it('Si el operador no es válido debe retornar un error', function(){
    let resultInvalid = operacionesMath(1, 1, 'INVALID')
    expect(resultInvalid.status).to.equal('operator not found')
  })
})