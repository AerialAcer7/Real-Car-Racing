class Game{
  constructor(){

  } 
  readGameState(){
    database.ref("/gameState").on("value",function(data){
     gameState = data.val(); 
    })   
}

updateGameState(state){
  database.ref("/").update({gameState:state});

}

play(){
  Player.readPlayers();
    /*cars[0];
  cars[1];
  cars[2];
  cars[3];

  for(var i=0;i<cars.length;i=i+1){
    cars[i];
  }*/

  form.hide();

  if(allPlayers != null){
  image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
  var y = 100;
  var i = 0;
  var x = 200;
  for(var p in allPlayers){
    allPlayers[p];
    y = displayHeight-allPlayers[p].distance;
    i = i+1;
    x = x+200;
    //text(allPlayers[p].name+" : "+allPlayers[p].distance,200,y);
    cars[i-1].x = x;
    cars[i-1].y = y;

    if(i === player.index){
    // cars[i-1].shapeColor = "red"; 
     camera.position.x = displayWidth/2;
     camera.position.y = cars[i-1].y;
     fill("green");
     ellipse(cars[i-1].x,cars[i-1].y,100,100);
    }

   // console.log(allPlayers[p].distance);
    }
  }
    if(keyDown(UP_ARROW) && player.index != null){
      player.distance = player.distance+10;
    
     player.writePlayers(); 
    }
    drawSprites();
    Player.readRank();
    if(player.distance>3510){
      game.updateGameState(2);
      var end = createElement("h1","YOU WON");
      end.position(displayWidth/2,displayHeight/2);
      console.log(player.rank);
      player.rank = player.rank+1;
      player.updateRank(player.rank);
     }
}
}