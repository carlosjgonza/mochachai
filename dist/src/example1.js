'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var operacionesMath = function operacionesMath(num1, num2, operator) {
  var numInt1 = ~~num1;
  var numInt2 = ~~num2;

  switch (operator) {
    case 'SUMA':
      return {
        status: 'ok',
        result: numInt1 + numInt2
      };
      break;
    case 'RESTA':
      return {
        status: 'ok',
        result: numInt1 - numInt2
      };
      break;
    case 'MULTIPLICACION':
      return {
        status: 'ok',
        result: numInt1 * numInt2
      };
      break;
    case 'DIVISION':
      return {
        status: 'ok',
        result: numInt1 / numInt2
      };
      break;
    default:
      return {
        status: 'operator not found'
      };
      break;
  }
};

exports.default = operacionesMath;