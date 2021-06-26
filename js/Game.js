class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    c1 = createSprite(width / 2 - 100, height - 100);
    c1.addImage("car1", c1Img);
    c1.scale = 0.7;

    c2 = createSprite(width / 2 + 50, height - 100);
    c2.addImage("car2", c2Img);
    c2.scale = 0.7;

    c3 = createSprite(width / 2 - 100, height - 100);
    c3.addImage("car1", c3Img);
    c3.scale = 0.7;

    c4 = createSprite(width / 2 + 50, height - 100);
    c4.addImage("car2", c4Img);
    c4.scale = 0.7;

    cars = [c1, c2,c3,c4];
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //SA
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //index of the array
      var index = 0;
      var x=310;
      for (var plr in allPlayers) {
        //use data form the database to display the cars in x and y direction
        x=x+170;
        var y = height - allPlayers[plr].positionY;

        cars[index].position.x = x;
        cars[index].position.y = y;

        //add 1 to the index for every loop
        index = index + 1;
      }

      // handling keyboard events
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }

      drawSprites();
    }
  }
}