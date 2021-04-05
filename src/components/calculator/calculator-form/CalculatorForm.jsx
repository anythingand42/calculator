import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../../input';
import Select from '../../select';
import Button from '../../button';
import isNumeric from '../../../math-utils/isNumeric';
import { ActionEnum, operations } from '../shared/const';

const Container = styled.div`
  width: 100%;
  input, select, button {
    font-size: 16px;
  }
`;

const InputBox = styled.div`
  width: 100%;

  display: flex;
  margin-bottom: 0.5em;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    & > select {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 0.5em;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function CalculatorForm({
  operandA,
  operandB,
  operation,
  dispatch,
}) {
  return (
    <Container>
      <InputBox>
        <Input
          data-testid="input-a"
          type="text"
          spellcheck="false"
          placeholder="A"
          value={operandA}
          onChange={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.setOperandA, payload: event.target.value });
          }}
          error={operandA && !isNumeric(operandA)}
        />
        <Select
          data-testid="operation-select"
          value={operation}
          onChange={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.setOperation, payload: event.target.value });
          }}
        >
          {Object.entries(operations).map(
            (([key, label]) => <option key={key} value={key}>{label}</option>),
          )}
        </Select>
        <Input
          data-testid="input-b"
          type="text"
          spellCheck={false}
          placeholder="B"
          value={operandB}
          onChange={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.setOperandB, payload: event.target.value });
          }}
          error={operandB && !isNumeric(operandB)}
        />
      </InputBox>
      <ButtonBox>
        <Button
          data-testid="calculate"
          type="button"
          disabled={!(isNumeric(operandA) && isNumeric(operandB))}
          onClick={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.calculate });
          }}
        >
          Calculate
        </Button>
      </ButtonBox>
    </Container>
  );
}

CalculatorForm.propTypes = {
  operandA: PropTypes.string.isRequired,
  operandB: PropTypes.string.isRequired,
  operation: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CalculatorForm;
