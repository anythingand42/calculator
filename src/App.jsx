import React from 'react';
import styled from 'styled-components';

import Calculator from './components/calculator';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
