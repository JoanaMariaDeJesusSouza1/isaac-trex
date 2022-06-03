var trex, trexRunning;
var edges;
var ground, imagemSolo;



//preload carrega as midías
function preload(){
 //animação do Trex
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  //imagem do ground
  imagemSolo = loadImage("ground2.png");

}
//setup faz aconfiguração
function setup(){
  createCanvas(600,200)
  // criando as bordas
  edges = createEdgeSprites();
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // adicione dimensão e posição ao trex
  trex.addAnimation("running", trexRunning);
  trex.scale=0.5;
  //sprite do ground
  ground =createSprite(300,170,600,2);
  ground.addImage("ground", imagemSolo);

}
//draw faz o movimento, a ação do jogo
function draw(){
  background("gray");




  // dando velocidade ao ground
  ground.velocityX =-10;
  // fazero trex pular
    if(keyDown("space")) {
       trex.velocityY = -10;
 }//conferindo a rolagem do ground
    if( ground.x<0){
      ground.x=ground.width/2;
    }
 //coordenadas do mouse na tela
   text("X: "+mouseX+"  / Y: "+mouseY,mouseX,mouseY);
  
 // chamando a  função de gravidade
  gravity();
  //colisão do trex com as bordas
    trex.collide(ground);
    //console.log(trex.Y);

  
  drawSprites();

}
// função de gravidade
function gravity(){
  trex.velocityY+=0.5;
}

