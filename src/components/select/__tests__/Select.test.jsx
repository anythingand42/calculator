import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Select from '../Select';

test('Select component', () => {
  const { container } = render(<Select />);
  expect(container.firstChild).toMatchSnapshot();
});
