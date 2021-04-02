import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CalculatorForm from '../CalculatorForm';
import OperationEnum from '../../../../math-utils/OperationEnum';

test('CalculatorForm component', () => {
  const { container } = render(<CalculatorForm A="2" B="4" operation={OperationEnum.sum} dispatch={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('CalculatorForm component in an invalid state', () => {
  const { container } = render(<CalculatorForm A="ababa" B="lalala" operation={OperationEnum.divide} dispatch={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});
