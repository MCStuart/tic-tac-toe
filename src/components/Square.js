import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: lightblue;
  border: 2px solid darkblue;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;

const Square = ({ value, onClick }) => (
    <Button onClick={onClick}>
        {value}
    </Button>
);

export default Square;