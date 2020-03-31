import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Grid = styled.div`
width: 400px;
height: 400px;
margin: 0 auto;
border: 4px solid darkblue;
border-radius: 10px;
display: grid;
grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board = ({ squares, onClick }) => (
  <Grid>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </Grid>
)

export default Board;