
const operacionesMath = (num1, num2, operator) => {
  let numInt1 = ~~num1;
  let numInt2 = ~~num2;

  switch(operator) {
    case 'SUMA':
      return  { 
                status: 'ok',
                result: numInt1 + numInt2 
              };
      break;
    case 'RESTA':
      return  { 
                status: 'ok',
                result: numInt1 - numInt2 
              };
      break;
    case 'MULTIPLICACION':
      return  { 
                status: 'ok',
                result: numInt1 * numInt2 
              };
      break;
    case 'DIVISION':
      return  { 
                status: 'ok',
                result: numInt1 / numInt2 
              };
      break;
    default: return {
                      status: 'operator not found'
                    }
      break;
  }
}

export default operacionesMath