/* NOTE: We will likely want to add a system to encourage variation. */
// Helper function to randomly generate path
export function randomPath(rows, cols) {
  // Fill 2D Array with zeroes to initialize
  var matrix = new Array(rows).fill(0).map(() => (
    new Array(cols).fill(0))
  );
  
  // First row
  var selectedPane = Math.floor(Math.random() * cols);
  matrix[rows - 1][selectedPane] = 1;

  // Randomly generate path from second row onwards
  for (var i = rows - 2; i >= 0; i--) {
    var validTiles = [];
    if (selectedPane === 0) {
      validTiles = [0, 1];
    } else if (selectedPane === cols - 1) {
      validTiles = [cols - 2, cols - 1];
    } else {
      validTiles = [selectedPane - 1, selectedPane, selectedPane + 1];
    }

    selectedPane = Math.floor(
      (Math.random() * (validTiles[validTiles.length - 1] + 1)
      + validTiles[0])
    );

    matrix[i][selectedPane] = 1;
  }  
  return matrix;
}
