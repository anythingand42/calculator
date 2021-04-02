import { useReducer } from 'react';

import OperationEnum from '../../math-utils/OperationEnum';
import operationHandlers from '../../math-utils/operationHandlers';
import { ActionEnum } from './shared/const';

const initialState = {
  operation: OperationEnum.sum,
  A: '',
  B: '',
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ActionEnum.setOperation:
      return { ...state, operation: Number(action.payload) };
    case ActionEnum.setA:
      return { ...state, A: action.payload };
    case ActionEnum.setB:
      return { ...state, B: action.payload };
    case ActionEnum.calculate: {
      const result = operationHandlers[state.operation](parseFloat(state.A), parseFloat(state.B));
      return {
        ...state,
        history: state.history.concat({
          A: state.A,
          B: state.B,
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
