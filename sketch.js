const _SPEED = 0;
const _QUANTITY = 0;
const _SPAWN = 0;

let bkgColor = '#7BDDF6';
let drop;
let bacia;

function preload(){
  drop_xl = loadImage('/img-assets/drop-xl.png');
  drop_l = loadImage('/img-assets/drop-l.png');
  drop_s = loadImage('/img-assets/drop-s.png');
  // bacia = loadImage('');
}

function setup() {
  createCanvas(500, 800);
}

function draw() {
  background(bkgColor);
  drawDrop();
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