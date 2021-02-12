class Player{
  constructor(){
   this.name = null;
   this.distance = 0;
   this.index = null;
   this.rank = 0;
   
  } 
  
  readPlayerCount(){
    database.ref("/playerCount").on("value",function(data){
    playerCount = data.val();   
    });   
  }

  writePlayers(){
   database.ref("/players/player"+this.index).set({name:this.name,distance:this.distance,rank:this.rank});
  }

  updateCount(count){
    database.ref("/").update({playerCount:count});  

  }

  static readPlayers(){
   database.ref("/players").on("value",function(data){
     allPlayers = data.val();
   }); 
  }

  deletePlayers(){
   database.ref('/players').remove(); 
  }

  static readRank(){
   database.ref('/players/player'+this.index).on("value",(data)=>{
   this.rank = data.val();
   }) 
  }

  updateRank(rank){
   database.ref('/players/player'+this.index).update({rank:rank}); 
  }
}

