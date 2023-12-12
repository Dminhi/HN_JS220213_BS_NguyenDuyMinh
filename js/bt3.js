function drawHeart(m, n) {
  for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (
        !(
          (i === 1 && (j === 1 || j === Math.floor(n / 2) + 1 || j === n)) ||
          (i === Math.floor(m / 2) + 1 && (j === 1 || j === n)) ||
          (i > Math.floor(m / 2) + 1 && (j <= 2 || j >= n - 1))
        )
      ) {
        row += " * ";
      } else {
        row += "   ";
      }
    }
    console.log(row);
  }
}

let m = 6,
  n = 7;
drawHeart(m, n);
