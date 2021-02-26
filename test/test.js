var module = require('../index')
var expect = require('chai').expect;

describe('#factorial()', function () {


    // test recursive function
    it('should calculate factorial of 9 using recursion', function () {
        // add an assertion
        expect(module.factorial(9)).to.equal(362880);
    })

    // test tail recursion version
    it('should calculate factorial of 9 using tail recursion', function () {
        // add an assertion
        expect(module.factorial_tr(9)).to.equal(362880);
    })

})