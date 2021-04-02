import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Button from '../Button';

test('Button component', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});
