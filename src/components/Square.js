import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: lightblue;
`;

const Square = ({ value, onClick }) => (
    <Button onClick={onClick}>
        {value}
    </Button>
);

export default Square;