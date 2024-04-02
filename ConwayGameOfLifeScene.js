class ConwayGameOfLifeScene extends Phaser.Scene {
  create() {
    // Create a 100x100 array filled with boolean values
    const numRows = 100;
    const numCols = 100;
    const gridSize = 40;

    let gameGrid = [];

    for (let y = 0; y < numRows; y++) {
      let row = [];
      for (let x = 0; x < numCols; x++) {
        // Generate boolean values (true/false) based on some condition
        const value = Math.random() > 0.5; // Example: Random true/false
        row.push(value);
      }
      gameGrid.push(row);
    }

    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numRows; x++) {
        if (gameGrid[x][y] === true) {
          this.add.rectangle(
            gridSize / 2 + x * gridSize,
            gridSize / 2 + y * gridSize,
            gridSize,
            gridSize,
            0xff0000
          );
        }
      }
    }
  }
}
