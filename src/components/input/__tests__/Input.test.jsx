import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Input from '../Input';

test('Input component', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Input component with error prop', () => {
  const { container } = render(<Input error />);
  expect(container.firstChild).toMatchSnapshot();
});
