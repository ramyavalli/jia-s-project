class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("lop.png", "game title");
    this.greeting = createElement("h2");
    
  }

  setElementsPosition() {
    this.titleImg.position(50, 20);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
   
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
       

      var message = `
      Hello ${this.input.value()}
      </br>Now that you are here, I am the only one that can help you escape
      </br>
      </br>Things to remember:
      </br> Using the arrow keys will help you move.
      </br> Collecting gems will increase your speed.
      </br> Getting hit by obstacles will decrease your speed.
      </br> You have 3 lives, getting hit by a monster will make you lose a life.
      </br> After all the lives are exhausted, it's game over for you.
      </br> To win reach the treasure box which contains the jewel first.
      </br>
      </br>But this task isn't easy, you will face a lot of difficulties
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount); // BP
      player.getDistance(); //BP
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}