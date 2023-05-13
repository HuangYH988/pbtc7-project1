function check3_Horizontal(board, c4rows, c4columns, p1, p2) {
  let score = [0, 0];

  for (let r = 0; r < c4rows; r++) {
    for (let c = 0; c < c4columns - 3; c++) {
      if (![p1, p2].includes(board[r][c])) continue;

      if (board[r][c] === board[r][c + 1] && board[r][c] === board[r][c + 2]) {
        if (c === 0) {
          if (
            [null, 3].includes(board[r][c + 3]) &&
            board[r][c] !== board[r][c + 4]
          ) {
            score[board[r][c] === p1 ? 0 : 1]++;
          }
        } else if (c === 4) {
          if (
            [null, 3].includes(board[r][c - 1]) &&
            board[r][c] !== board[r][c - 2]
          ) {
            score[board[r][c] === p1 ? 0 : 1]++;
          }
        } else {
          if ([null, 3].includes(board[r][c - 1])) {
            score[board[r][c] === p1 ? 0 : 1]++;
          }
          if ([null, 3].includes(board[r][c + 3])) {
            score[board[r][c] === p1 ? 0 : 1]++;
          }
        }
      } else if (
        (board[r][c] === board[r][c + 1]) +
          (board[r][c] === board[r][c + 2]) +
          (board[r][c] === board[r][c + 3]) ===
          2 &&
        [null, 3].includes(board[r][c + 1]) &&
        [null, 3].includes(board[r][c + 2]) &&
        [null, 3].includes(board[r][c + 3])
      ) {
        if (c === 2 && board[r][c] !== board[r][c - 1]) {
          score[board[r][c] === p1 ? 0 : 1]++;
        } else {
          score[board[r][c] === p1 ? 0 : 1]++;
        }
      }
    }
  }

  return score;
}

export default check3_Horizontal;
