const chai = require('chai');
const expect = chai.expect;

const somarNumeros = (a,b) => a + b;

describe('Somas', () => {
	it('Soma de dois numeros - 2 e 3', (done) => {
		const resultado = somarNumeros(2,3);
		expect(resultado).be.equal(5);
		done();
	})
	
	it('Soma de dois numeros - -2 e 3', (done) => {
		const resultado = somarNumeros(-2,3);
		expect(resultado).be.equal(1);
		done();
	})
})