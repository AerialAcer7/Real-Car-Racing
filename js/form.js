class Form{
  constructor(){
    this.input = createInput("Enter The Name");
    this.button = createButton("Play");
    this.greeting = createElement('h1');
  }  

  display(){
   this.input.position(displayWidth/2,displayHeight/2);
    
    this.button.position(displayWidth/2,displayHeight/2+100);

    this.button.mousePressed(() =>{
     player.name = this.input.value();
     playerCount = playerCount+1;
     player.index = playerCount;
     this.input.hide();
     this.button.hide();

     player.updateCount(playerCount);
     player.writePlayers();
     this.greeting.html("Hello "+player.name);
     this.greeting.position(displayWidth/2,displayHeight/2);
    })
  }

  hide(){
   this.input.hide();
   this.button.hide();
   this.greeting.hide(); 
  }
}