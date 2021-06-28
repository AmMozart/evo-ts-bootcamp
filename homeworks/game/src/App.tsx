import React, { useEffect, useRef } from 'react'
import './App.css'
import { Game } from './3d/Game'
import { Score } from './features/score/Score'
import { Balls } from './features/ball/Balls'

function App() {

  const canvas = React.useRef<HTMLCanvasElement | null>(null)
  const game = useRef<Game | null>(null)


  useEffect(() => {
    if (canvas.current) {
      game.current = new Game(canvas.current);
    }
  }, [])
  return (
    <>
      <div className="canvasWrapper">
        <canvas ref={canvas} id="renderCanvas">You're browser don't support canvas tag</canvas>
      </div>
      <Score />
      <Balls />
    </>
  );
}

export default App;
