import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Calculator from '../Calculator';

test('Calculator component', () => {
  const { container } = render(<Calculator />);
  expect(container.firstChild).toMatchSnapshot();
});
