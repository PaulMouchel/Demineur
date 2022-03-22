
import { useState } from 'react';
import './App.css';
import { Grid, Cell } from './components'
import Game from './objects/game';

const gridSize = {
  width: 10,
  height: 10
}

const quantityOfBomb = 10

function App() {

  const game = new Game(gridSize, quantityOfBomb)

  const displayableGrid = game.grid.flat()

  return (
    <div className="App">
        <Grid>
          { displayableGrid.map((value, index) => 
            <Cell key={index} value={value}></Cell>
          )}
        </Grid>
    </div>
  );
}

export default App;
