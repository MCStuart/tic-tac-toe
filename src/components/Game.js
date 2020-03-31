import React, { useState } from 'react';
import Board from './Board';
import styled from 'styled-components';
import { calculateWinner } from '../helpers';

const BoardText = styled.div`
  width: 200px;
  margin: 20px auto;
`;

const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  const jumpTo = () => {

  }

  const renderMoves = () => {
    
  }

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <BoardText>
        <p>{}</p>
      </BoardText>
    </>
  )
}

export default Game;