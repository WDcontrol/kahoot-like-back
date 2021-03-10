export default class Players {
  public players: Array<any>;
  constructor() {
    this.players = [];
  }
  addPlayer(hostId: string, playerId: string, name: string, gameData: any) {
    var player = { hostId, playerId, name, gameData };
    this.players.push(player);
    return player;
  }
  removePlayer(playerId: string) {
    var player = this.getPlayer(playerId);

    if (player) {
      this.players = this.players.filter(
        (player) => player.playerId !== playerId
      );
    }
    return player;
  }
  getPlayer(playerId: string) {
    return this.players.filter((player) => player.playerId === playerId)[0];
  }
  getPlayers(hostId: string) {
    return this.players.filter((player) => player.hostId === hostId);
  }
}
