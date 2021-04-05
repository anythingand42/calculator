import { useReducer } from 'react';

import OperationEnum from '../../math-utils/OperationEnum';
import operationHandlers from '../../math-utils/operationHandlers';
import { ActionEnum } from './shared/const';

const initialState = {
  operation: OperationEnum.sum,
  operandA: '',
  operandB: '',
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ActionEnum.setOperation:
      return { ...state, operation: Number(action.payload) };
    case ActionEnum.setOperandA:
      return { ...state, operandA: action.payload };
    case ActionEnum.setOperandB:
      return { ...state, operandB: action.payload };
    case ActionEnum.calculate: {
      const result = operationHandlers[state.operation](
        parseFloat(state.operandA), parseFloat(state.operandB),
      );
      return {
        ...state,
        history: state.history.concat({
          operandA: state.operandA,
          operandB: state.operandB,
          operation: state.operation,
          result: result ? String(result) : 'not found',
          key: state.history.length,
        }),
      };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function useCalculatorLogic() {
  return useReducer(reducer, initialState);
}

export default useCalculatorLogic;
