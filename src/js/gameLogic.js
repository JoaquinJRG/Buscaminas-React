export function createCoverMatrix (newCoverMatrix, rows, cols) {
  for (let i = 0; i < rows; i++) {
    let fila = Array(cols).fill(true);
    newCoverMatrix.push(fila);
  }

}

export function createBoard(newBoard, rows, cols) {
  for (let i = 0; i < rows; i++) {
    let fila = Array(cols).fill(0);
    newBoard.push(fila);
  }
}

export function addMines(newBoard, rows, cols, minesPosition, mines) {
  let minesNum = 0;

  while (minesNum < mines) {
    let x = Math.floor(Math.random() * rows);
    let y = Math.floor(Math.random() * cols);

    if (newBoard[x][y] == 0) {
      newBoard[x][y] = "💥";
      minesPosition.push([x, y]);
      minesNum++;
    }
  }
}

export function addNumbers(newBoard, rows, cols, minesPosition) {
  minesPosition.forEach((mine) => {
    let mineX = mine[0];
    let mineY = mine[1];

    for (let i = Math.max(0, mineX - 1); i <= Math.min(rows - 1, mineX + 1); i++) {
      for (let j = Math.max(0, mineY - 1); j <= Math.min(cols - 1, mineY + 1); j++) {
        if (i !== mineX || j !== mineY) {
          if (newBoard[i][j] !== "💥") {
            newBoard[i][j] = Number(newBoard[i][j]) + 1;
          }
        }
      }
    }

  })
}

export function checkWin (mines, coverMatrix, rows, cols) {

  const revealedCells = coverMatrix.flat().filter(cell => cell === false).length;

  if ( (revealedCells + mines) === rows * cols) return true;

  return false; 

}

