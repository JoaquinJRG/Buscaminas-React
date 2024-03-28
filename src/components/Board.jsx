import { useEffect, useState } from "react";
import { createCoverMatrix, createBoard, addMines, addNumbers, checkWin } from "../js/gameLogic.js";
import { Cell } from "./Cell.jsx";
import { Button } from "./Button.jsx";
import { Modal } from "./Modal.jsx"; 
import Confetti from "react-confetti";


export function Board({ cols, rows, mines, setPlay }) {
  const [coverMatrix, setCoverMatrix] = useState(null);
  const [board, setBoard] = useState(null);
  const [reset, setReset] = useState(false);
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false); 

  let minesPosition = [];

  useEffect(() => {
    let newBoard = [];
    let newCoverMatrix = []; 
    minesPosition = [];

    createCoverMatrix(newCoverMatrix, rows, cols); 
    createBoard(newBoard, rows, cols);
    addMines(newBoard, rows, cols, minesPosition, mines);
    addNumbers(newBoard, rows, cols, minesPosition);

    setCoverMatrix(newCoverMatrix); 
    setBoard(newBoard);

  }, [reset])
  
  useEffect(() => {

    if (coverMatrix === null) return; 

    const updatedCoverMatrix = [...coverMatrix];

    if (checkWin(mines, updatedCoverMatrix, rows, cols )) {
      setWin(true); 
    }

  },[coverMatrix])
  

  const revealEmptyCells = (x, y) => {
    if (x < 0 || x >= rows || y < 0 || y >= cols || !coverMatrix[x][y]) {
      return;
    }

    // Revelar la casilla
    const updatedCoverMatrix = [...coverMatrix];
    updatedCoverMatrix[x][y] = false;
    setCoverMatrix(updatedCoverMatrix);

    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
    
    if (board[x][y] === 0) {
      for (const [dx, dy] of directions) {
        revealEmptyCells(x + dx, y + dy);
      }
    }

  }

  const resetBoard = () => {  
    minesPosition = [];
    setGameOver(false); 
    setBoard(null);
    setReset(!reset);
    setWin(false);
    setGameOver(false);
  }

  const back = () => {
    resetBoard();
    setPlay(false);
  }

  return (
    <main>
      <section className="flex justify-between mb-4">
        <Button clickFunction={back}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" /></svg>
        </Button>
        <Button clickFunction={resetBoard}>Reset</Button>
      </section>
      <section className="flex flex-col gap-1">
        {board && board.map((row, i) => {
          return (
            <div key={i} className="flex gap-1">
              {row.map((cell, j) => {
                return (
                  <Cell 
                    newCover={coverMatrix[i][j]} 
                    coverMatrix={coverMatrix}
                    setCoverMatrix={setCoverMatrix}
                    setGameOver={setGameOver} 
                    i={i}
                    j={j}
                    revealEmptyCells={revealEmptyCells}
                    key={`${i}-${j}`}
                  >
                    {cell}
                  </Cell>
                )
              })}
            </div>
          )
        })}
      </section>
      {win && <Confetti />}
      {gameOver && <Modal text="Has perdido" clickFunction={resetBoard}/>}
    </main>
  )

}