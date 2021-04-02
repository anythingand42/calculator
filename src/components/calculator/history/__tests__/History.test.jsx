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
          key: 0, A: '2', B: '2', operation: OperationEnum.sum, result: '4',
        },
        {
          key: 1, A: '2', B: '4', operation: OperationEnum.divide, result: '0.5',
        },
        {
          key: 2, A: '3', B: '2', operation: OperationEnum.mod, result: '1',
        },
        {
          key: 3, A: '2', B: '7', operation: OperationEnum.maxPrimeBetween, result: '7',
        },
      ]}
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
