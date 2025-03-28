const _SPEED = 0;
const _QUANTITY = 0;
const _SPAWN = 0;
let pontos = 0;

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

 // Checa se a gota tocou a bacia
 if (dropY + drop_xl.height >= height - 50 &&  // Verifica se a gota chegou na parte inferior
  dropX + drop_xl.width > baciaX &&        // Verifica se a gota está dentro da largura da bacia
  dropX < baciaX + baciaWidth) {           // Verifica se a gota não passou da borda da bacia
aumentarPontos();  // Aumenta os pontos quando a gota toca a bacia
}

function aumentarPontos() {
pontos++;  // Aumenta 1 ponto a cada gota capturada pela bacia
}

function mostrarPontos() {
  fill(0);  // cor preta
  textSize(32);  // tamanho
  text('Pontos: ' + pontos, 20, 40);
}