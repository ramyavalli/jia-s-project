var canvas, backgroundImage;

var gameState;
var playerCount;
var allPlayers,players;
var database;
//var animations;
var reset;
var cars=[];
var form, player,playerCount, game, index=0, aRead1, aRead2, aRead3, aRead4;
var  cw, cwImage, paperImg, roadImg, chest, c1, c1Img, c2, c2Img, c3, c3Img, c4, c4Img,advimg;

var backgroundImage, bgImg, track;

function preload(){
  backgroundImage = loadImage("backgroundd.png");
  c1Img = loadImage( "c1/c1.5.png");
  c2Img = loadImage("c2/c2.5.png");
  c3Img = loadImage("c3/c3.5.png");
  c4Img = loadImage("c4/c4.5.png");
  track = loadImage("track.jpg");
  chest = loadImage("chest.png");

  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
