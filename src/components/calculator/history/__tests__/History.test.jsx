import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import History from '../History';
import OperationEnum from '../../../../math-utils/OperationEnum';

test('History component', () => {
  const { container } = render(
    <History
      entries={[
        {
          key: 0, operandA: '2', operandB: '2', operation: OperationEnum.sum, result: '4',
        },
        {
          key: 1, operandA: '2', operandB: '4', operation: OperationEnum.divide, result: '0.5',
        },
        {
          key: 2, operandA: '3', operandB: '2', operation: OperationEnum.mod, result: '1',
        },
        {
          key: 3, operandA: '2', operandB: '7', operation: OperationEnum.maxPrimeBetween, result: '7',
        },
      ]}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
