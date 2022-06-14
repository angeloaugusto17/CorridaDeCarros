class Form{
  //constroi o formulario inicial
  constructor(){
    this.input = createInput("").attribute("placeholder", "DIGITE SEU NOME");
    this.playButton = createButton("INICIAR");
    this.titleImg = createImg("./assets/TITULO.png", "gameTitle");
    this.greeting = createElement("h2");  
  }

  //define a posição dos elementos do formulario
  setElementsPosition(){
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 95, height/2 - 20);
    this.titleImg.position(140, 50);
    this.greeting.position(width/2 - 300, height/2 - 100);
    //mudar pos
  }

  //define o estilo dos elementos do formulario
  setElementsStyle(){
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");
  }

  //função para esconder os elementos
  hide(){
    this.playButton.hide();
    this.input.hide();
    this.greeting.hide();
  }

  //função de intereção com o botao do formulario
  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      this.input.hide();
      var msg = `Olá ${this.input.value()}, </br>aguarde o próximo jogador...`;
      this.greeting.html(msg);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      //Add funções
    })
  }

  //função para mostrar
  display(){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
