class ConwayGameOfLifeScene extends Phaser.Scene {
  create() {
    // Create a 100x100 array filled with boolean values
    const numRows = 100;
    const numCols = 100;
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
          this.add.rectangle(x * 40, y * 40, 40, 40, 0xff0000);
        }
      }
    }
  }
}
