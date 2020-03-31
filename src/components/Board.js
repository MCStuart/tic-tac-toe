import React from 'react';
import Square from './Square';

const Board = ({ squares, onclick }) => (
  <div>
    <Square value="1" onClick={() => onclick("dummy value")} />
    <Square value="2" onClick={() => onclick("dummy value")} />
    <Square value="3" onClick={() => onclick("dummy value")} />
    <Square value="4" onClick={() => onclick("dummy value")} />
    <Square value="5" onClick={() => onclick("dummy value")} />
    <Square value="6" onClick={() => onclick("dummy value")} />
    <Square value="7" onClick={() => onclick("dummy value")} />
    <Square value="8" onClick={() => onclick("dummy value")} />
    <Square value="9" onClick={() => onc`lick("dummy value")} />
  </div>
)

export default Board;