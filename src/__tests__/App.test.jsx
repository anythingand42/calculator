import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';

import App from '../App';
import OperationEnum from '../math-utils/OperationEnum';

test('initial state', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});

test('main usage', () => {
  const { container } = render(<App />);
  const inputA = screen.getByTestId('input-a');
  const inputB = screen.getByTestId('input-b');
  const operationSelect = screen.getByTestId('operation-select');
  const calcButton = screen.getByTestId('calculate');

  const doCalculation = (operandA, operandB, operation) => {
    fireEvent.change(inputA, { target: { value: operandA } });
    fireEvent.change(inputB, { target: { value: operandB } });
    fireEvent.change(operationSelect, { target: { value: operation } });
    fireEvent.click(calcButton);
  };

  doCalculation('2', '4', OperationEnum.sum);
  doCalculation('20', '4', OperationEnum.divide);
  doCalculation('297', '13', OperationEnum.mod);
  doCalculation('34', '900', OperationEnum.maxPrimeBetween);

  expect(container.firstChild).toMatchSnapshot();
});
