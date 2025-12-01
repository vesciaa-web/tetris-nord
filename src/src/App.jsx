import React, { useState, useEffect } from 'react'
const next = spawnPiece()
if (collision(next, cleaned)) setGameOver(true)
setPiece(next)
}
}


const rotatePiece = () => {
const newShape = rotate(piece.shape)
const newPiece = { ...piece, shape: newShape }
if (!collision(newPiece, grid)) setPiece(newPiece)
}


useEffect(() => {
const interval = setInterval(() => { if (!gameOver) move(1,0) }, 600)
return () => clearInterval(interval)
})


useEffect(() => {
const handleKey = (e) => {
if (gameOver) return
if (e.key === 'ArrowLeft') move(0,-1)
if (e.key === 'ArrowRight') move(0,1)
if (e.key === 'ArrowDown') move(1,0)
if (e.key === 'ArrowUp') rotatePiece()
}
window.addEventListener('keydown', handleKey)
return () => window.removeEventListener('keydown', handleKey)
}, [piece, grid, gameOver])


return (
<div className="app">
<h1>Tetris al Polo Nord ❄️</h1>
{gameOver && <div className="gameover">Game Over</div>}
<div className="board" style={{ gridTemplateColumns: `repeat(${COLS}, 28px)`}}>
{grid.map((row, r) => row.map((cell, c) => {
// calcola se la cella è parte del pezzo corrente
let isPiece = false
piece.shape.forEach((pr, rr) => pr.forEach((pv, cc) => {
if (pv && r === piece.row + rr && c === piece.col + cc) isPiece = true
}))
return (
<div key={`${r}-${c}`} className={`cell ${isPiece || cell ? 'filled' : ''}`}></div>
)
}))}
</div>
</div>
)
}
