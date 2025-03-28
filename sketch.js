const _SPEED = 0;
const _QUANTITY = 0;
const _SPAWN = 0;

let bkgColor = '#7BDDF6';
let drop;
let bacia;
let x
let velocidade = 6; 

function preload(){
  drop_xl = loadImage('/img-assets/drop-xl.png');
  drop_l = loadImage('/img-assets/drop-l.png');
  drop_s = loadImage('/img-assets/drop-s.png');
  bacia = loadImage('/img-assets/bacia.png');
  
}

function setup() {
  createCanvas(500, 800);
  x = width / 2;
}

function draw() {
  background(bkgColor);

  if (keyIsDown(LEFT_ARROW)) {
    x -= velocidade;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += velocidade;
  }

  x = constrain(x, 0, width - 150);
  
  image(bacia, x, 680, 150, 150)
  
}




//todos os desenhos
  //ceu
  //gotas
  //bacia
  //background

///dinamicas do jogo
//contador de pontos
//gotas
  //geração randomica das gotas
  //velocidade das gotas
  //queda das gotas
//bacia
  //movimento lateral
  //area de contato da bacia com as gotas

function drawDrop() {
  image(drop_xl, 100, 100);
}

function generateDrop(){
  
}

function acellDrop(){
  
}

function fallDrop(){
  
}