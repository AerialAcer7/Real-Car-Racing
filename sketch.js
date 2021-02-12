var gameState = 0;
var allPlayers;
var playerCount;
var car1,car2,car3,car4;
var carImg,car2Img,car3Img,car4Img,trackImg;
var cars;

function preload(){
 carImg = loadImage("car1.png");
 car2Img = loadImage("car2.png");
 car3Img = loadImage("car3.png");
 car4Img = loadImage("car4.png");
 trackImg = loadImage("track.jpg");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  
  player = new Player();

  game = new Game();

  form = new Form();
  
  game.readGameState();

  if(gameState === 0){
   form.display();
   player.readPlayerCount();
  }
  car1 = createSprite(200,400,20,20);
  car1.addImage("car1",carImg);
  car2 = createSprite(200,300,20,20);
  car2.addImage("car2",car2Img);
  car3 = createSprite(200,200,20,20);
  car3.addImage("car3",car3Img);
  car4 = createSprite(200,100,20,20);
  car4.addImage("car4",car4Img);

  cars = [car1,car2,car3,car4];
}

function draw(){
  background("white");
  
  if(playerCount == 4){
    game.updateGameState(1);
  }

  if(gameState === 1){
   game.play(); 
   
  }
  
}
