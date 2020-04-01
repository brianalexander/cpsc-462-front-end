const TicTacToeAPI = {
  createTicTacToeGame: async () => {
    await timeout(5000);
    return 5;
  }
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default TicTacToeAPI;
