let board = [ [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '],
              [' ', ' ', ' ', ' ', ' ', ' '] ];

const startPlayer = () => {
  return Math.floor(Math.random() * 2) + 1; // player 1 or 2
}

const newGame = () => {
  // initiate new players for game
  let currentPlayer = startPlayer();
  // clear board for a new game
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = '__';  
    }
  }
}

const printBoard = () => {
  // prints out current board 
  let yCoord = 7;
  for (let i = 0; i < board.length; i++) {
    console.log(`${yCoord} - \t${board[i]}`);
    yCoord -= 1;
  } 
  console.log(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
}

const playToken = (column, token) => {
  // player inserts player token on board at specified column, A-G
  // if token exists in column, new token is inserted at one index less
}

const tokenExists = (x, y) => {
  // checks to see if token is in specified column
  if (board[y][x] !== '') {
    return true;  
  } else {
    return false;
  }
}

const wonGame = () => {
  // checks for four-in-a-row vertically, horizontally and diagonally 
}

const playGame = () => {
  // start game and play through
  newGame();
  console.log(`Player ${currentPlayer}, it\'s your turn.`);
  printBoard();
  let positionX = prompt('Please enter an x coordinate to place your token');
  let positionY = prompt('Please enter a y coordinate to place your token');
  if (!tokenExists()) {
    playToken(positionX, positionY, currentPlayer) 
  }
  if (wonGame()) {
    console.log(`Player ${currentPlayer} won!`);
    newGame();
    playGame();
  }
  // switch players after each turn
  if (currentPlayer === 1) {
    currentPlayer = 2; 
    token = 'O';
  } else {
    currentPlayer = 1; 
    token = 'X';
  }
  // start new turn
  playGame();
}
