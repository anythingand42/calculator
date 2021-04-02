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
  A,
  B,
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
          value={A}
          onChange={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.setA, payload: event.target.value });
          }}
          error={A && !isNumeric(A)}
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
          value={B}
          onChange={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.setB, payload: event.target.value });
          }}
          error={B && !isNumeric(B)}
        />
      </InputBox>
      <ButtonBox>
        <Button
          data-testid="calculate"
          type="button"
          disabled={!(isNumeric(A) && isNumeric(B))}
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
  A: PropTypes.string.isRequired,
  B: PropTypes.string.isRequired,
  operation: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CalculatorForm;
