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
  image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
    /*cars[0];
  cars[1];
  cars[2];
  cars[3];

  for(var i=0;i<cars.length;i=i+1){
    cars[i];
  }*/

  form.hide();
  var y = 100;
  var i = 0;
  var x = 150;
  for(var p in allPlayers){
    allPlayers[p];
    y = displayHeight-allPlayers[p].distance;
    i = i+1;
    x = x+150;
    //text(allPlayers[p].name+" : "+allPlayers[p].distance,200,y);
    cars[i-1].x = x;
    cars[i-1].y = y;

    if(i === player.index){
     cars[i-1].shapeColor = "red"; 
    }

   // console.log(allPlayers[p].distance);
    }
    if(keyDown(UP_ARROW) && player.index != null){
      player.distance = player.distance+10;
    
     player.writePlayers(); 
    }
    drawSprites();

}
}