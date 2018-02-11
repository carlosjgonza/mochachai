
const fetch  = require('node-fetch')
const expect = require('chai').expect

describe('Pruebas con llamesada AJAX usando fetch', function(){
  it('La llamada ajax se ejecuta correctamente', async function(){
    const res = await fetch('https://swapi.co/api/people/1')
    let luke = await res.json()

    //Validar si la llamada se completo
    expect(res.status).to.be.equal(200)

    expect(luke).to.be.an('object')
    expect(luke.name).to.be.equal('Luke Skywalker')
  })
})