import isPrime from './isPrime';
import OperationEnum from './OperationEnum';

const operationHandlers = {
  [OperationEnum.sum]: (a, b) => a + b,
  [OperationEnum.divide]: (a, b) => a / b,
  [OperationEnum.mod]: (a, b) => a % b,
  [OperationEnum.maxPrimeBetween]: (a, b) => {
    for (let i = Math.floor(b); i >= a && i > 0; i -= 1) {
      if (isPrime(i)) return i;
    }
    return null;
  },
};

export default operationHandlers;
