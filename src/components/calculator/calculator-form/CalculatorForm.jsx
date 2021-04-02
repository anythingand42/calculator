import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../../input';
import Select from '../../select';
import Button from '../../button';
import isNumeric from '../../../utils/isNumeric';

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

const OperationEnum = {
  sum: '+ (sum)',
  divide: '/ (divide)',
  mod: '% (remainder of a division)',
  maxPrimeBetween: 'Max prime number between A and B',
};

const ActionEnum = {
  setOperation: 0,
  setA: 1,
  setB: 2,
  calculate: 3,
};

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
          value={operation}
          onChange={(event) => {
            event.preventDefault();
            dispatch({ type: ActionEnum.setOperation, payload: event.target.value });
          }}
        >
          {Object.values(OperationEnum).map(
            ((value) => <option key={value} value={value}>{value}</option>),
          )}
        </Select>
        <Input
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
  operation: PropTypes.string.isRequired,
  B: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CalculatorForm;