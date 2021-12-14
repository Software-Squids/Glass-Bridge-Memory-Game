export function randomPath(rows, cols) {
  /* NOTE: We will likely want to add a system to encourage variation. */

  // Fill 2D Array with zeroes to initialize
  const matrix = new Array(rows).fill(0).map(() => (
    new Array(cols).fill(0)
  ));
  
  // First row
  var selectedPane = Math.floor(Math.random() * cols);
  matrix[rows - 1][selectedPane] = 1;

  // Randomly generate path from second row onwards
  for (let i = rows - 2; i >= 0; i--) {
    var validTiles = [];
    if (selectedPane === 0) {
      validTiles = [0, 1];
    } else if (selectedPane === cols - 1) {
      validTiles = [cols - 2, cols - 1];
    } else {
      validTiles = [selectedPane - 1, selectedPane, selectedPane + 1];
    }

    selectedPane = validTiles[Math.floor(validTiles.length * Math.random())];
    
    matrix[i][selectedPane] = 1;
  }
  console.log(matrix);  
  return matrix;
}
