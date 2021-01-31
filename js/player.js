class Player{
  constructor(){
   this.name = null;
   this.distance = 0;
   this.index = null;
   
  } 
  
  readPlayerCount(){
    database.ref("/playerCount").on("value",function(data){
    playerCount = data.val();   
    });   
  }

  writePlayers(){
   database.ref("/players/player"+playerCount).set({name:this.name,distance:this.distance});
  }

  updateCount(count){
    database.ref("/").update({playerCount:count});  

  }

  static readPlayers(){
   database.ref("/players").on("value",function(data){
     allPlayers = data.val();
   }); 
  }
}