const _SPEED = 0;
const _QUANTITY = 0;
const _SPAWN = 60;

let bkgColor = '#7BDDF6';
let drop;
let bacia;
let dropImages = [];

function preload() {
  dropImages = [
    loadImage('/img-assets/drop-s.png'),
    loadImage('/img-assets/drop-l.png'),
    loadImage('/img-assets/drop-xl.png')
  ];

  // bacia = loadImage('/img-assets/bacia.png');
}

function setup() {
  createCanvas(500, 800);
  frameRate(1);
}

function draw() {
  background(bkgColor);
  // drawDrop();
  // updateDrop();
  drop = generateDrop();

  while (drop.y < height) {
    image(drop.img, drop.x, drop.y);
    drop.y += 1 * drop.speed;
  }
  
}

function updateDrop() {
  if (frameCount % _SPAWN === 0) {
    drawDrop();
  }
}

function drawDrop() {
  drop = generateDrop();
  image(drop.img, drop.x, drop.y);
  
  while (drop.y < height) {
    drop.y += 1 * drop.speed;
    image(drop.img, drop.x, drop.y);
  }
  // if (drop.y > (height + drop.img.height)) {
  //   drop.y = 0;
  // }
}

function generateDrop(){
  let dropSort = random(dropImages);
  let xSort = constrain(random(width), dropSort.width/2, width - dropSort.width/2);
  let ySort = 0;
  let speedSort = random(1, 5);

  return {
    img: dropSort,
    x: xSort,
    y: ySort,
    speed: speedSort
  };
}