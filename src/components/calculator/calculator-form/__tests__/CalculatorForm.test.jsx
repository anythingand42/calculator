import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CalculatorForm from '../CalculatorForm';
import OperationEnum from '../../../../math-utils/OperationEnum';

test('CalculatorForm component', () => {
  const { container } = render(
    <CalculatorForm operandA="2" operandB="4" operation={OperationEnum.sum} dispatch={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('CalculatorForm component in an invalid state', () => {
  const { container } = render(
    <CalculatorForm operandA="ababa" operandB="lalala" operation={OperationEnum.divide} dispatch={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
