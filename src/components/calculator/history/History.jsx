import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { operations } from '../shared/const';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ddd;
    padding: 4px;
    width: 25%
  }

  td {
    text-align: center;
  }

  tr:nth-child(even){
    background-color: #f2f2f2;
  }

  th {
    background-color: #f2f2f2;
  }
`;

function History({ entries, className }) {
  if (entries.length === 0) return null;
  return (
    <StyledTable className={className}>
      <thead>
        <tr>
          <th>A</th>
          <th>Operation</th>
          <th>B</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.key}>
            <td>{entry.operandA}</td>
            <td>{operations[entry.operation]}</td>
            <td>{entry.operandB}</td>
            <td>{entry.result}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

History.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    operandA: PropTypes.string,
    operandB: PropTypes.string,
    operation: PropTypes.number,
    result: PropTypes.string,
    key: PropTypes.number,
  })).isRequired,
  className: PropTypes.string,
};

History.defaultProps = {
  className: '',
};

export default History;
