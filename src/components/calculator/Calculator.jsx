import React from 'react';
import styled from 'styled-components';

import CalculatorForm from './calculator-form';
import History from './history';
import useCalculatorLogic from './useCalculatorLogic';

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
  const [state, dispatch] = useCalculatorLogic();
  return (
    <Box>
      <CalculatorForm
        operandA={state.operandA}
        operandB={state.operandB}
        operation={state.operation}
        dispatch={dispatch}
      />
      <History className="history" entries={state.history} />
    </Box>
  );
}

export default Calculator;
