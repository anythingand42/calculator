import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import App from '../App';

test('renders correctly', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
