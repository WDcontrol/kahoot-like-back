export default class Games {
  public games: Array<any>;
  constructor() {
    this.games = [];
  }
  addGame(pin: number, hostId: string, gameLive: boolean, gameData: any) {
    var game = { pin, hostId, gameLive, gameData };
    this.games.push(game);
    return game;
  }
  removeGame(hostId: string) {
    var game = this.getGame(hostId);

    if (game) {
      this.games = this.games.filter((game) => game.hostId !== hostId);
    }
    return game;
  }
  getGame(hostId: string) {
    return this.games.filter((game) => game.hostId === hostId)[0];
  }
}
