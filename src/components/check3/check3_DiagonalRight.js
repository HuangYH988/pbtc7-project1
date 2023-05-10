function check3_DiagonalRight(board, rows, columns, p1, p2) {
  const score = [0, 0];

  for (let r = rows - 1; r >= 3; r--) {
    for (let c = 0; c < columns - 3; c++) {
      const curr = board[r][c];

      if (curr !== p1 && curr !== p2) {
        continue;
      }

      const left = board[r - 1][c + 1];
      const left2 = board[r - 2][c + 2];
      const left3 = board[r - 3][c + 3];
      const bottomLeft = board[r + 1][c - 1];
      const topRight = board[r - 3][c + 3];

      if ((r === 4 || r === 3) && c !== 0 && curr === left && curr === left2) {
        if (
          (bottomLeft === null || bottomLeft === 3) &&
          (topRight === null || topRight === 3)
        ) {
          score[curr === p1 ? 0 : 1]++;
        }
      } else if (
        (curr === left) + (curr === left2) + (curr === left3) === 2 &&
        (left === null ||
          left2 === null ||
          left3 === null ||
          left === 3 ||
          left2 === 3 ||
          left3 === 3)
      ) {
        score[curr === p1 ? 0 : 1]++;
      }
    }
  }

  return score;
}

export default check3_DiagonalRight;
