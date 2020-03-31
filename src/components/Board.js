import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Grid = styled.div`
width: 400px;
height: 400px;
margin: 0px;
border: 4px solid darkblue;
border-radius: 10px;
display: grid;
grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board = ({ squares, onClick }) => (
  <Grid>
    <Square value="1" onClick={() => onClick("dummy value")} />
    <Square value="2" onClick={() => onClick("dummy value")} />
    <Square value="3" onClick={() => onClick("dummy value")} />
    <Square value="4" onClick={() => onClick("dummy value")} />
    <Square value="5" onClick={() => onClick("dummy value")} />
    <Square value="6" onClick={() => onClick("dummy value")} />
    <Square value="7" onClick={() => onClick("dummy value")} />
    <Square value="8" onClick={() => onClick("dummy value")} />
    <Square value="9" onClick={() => onClick("dummy value")} />
  </Grid>
)

export default Board;