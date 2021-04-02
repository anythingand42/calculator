import React, { useReducer } from 'react';
import styled from 'styled-components';

import CalculatorForm from './calculator-form';
import History from './history';

const ActionEnum = {
  setOperation: 0,
  setA: 1,
  setB: 2,
  calculate: 3,
};

const initialState = {
  operation: '+',
  A: '',
  B: '',
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ActionEnum.setOperation:
      return { ...state, operation: action.payload };
    case ActionEnum.setA:
      return { ...state, A: action.payload };
    case ActionEnum.setB:
      return { ...state, B: action.payload };
    case ActionEnum.calculate: {
      return {
        ...state,
        history: state.history.concat({
          A: state.A,
          B: state.B,
          operation: state.operation,
          result: String(parseFloat(state.A) + parseFloat(state.B)),
        }),
      };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const Box = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .history {
    margin-top: 1em;
  }
`;

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Box>
      <CalculatorForm A={state.A} B={state.B} operation={state.operation} dispatch={dispatch} />
      <History className="history" entries={state.history} />
    </Box>
  );
}

export default Calculator;
