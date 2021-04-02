import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;
  padding: 4px;
  min-height: 28px;
  ${(props) => (props.error ? 'border-color: red; color: red;' : '')}
`;

export default StyledInput;
