const _SPAWN = 60;

let bkgColor = '#7BDDF6';

let dropImages = [];
let drops = [];

let bowl;
let bowlWidth = 150;
let bowlX;

let score = 0;

function preload() {
  dropImages = [
    loadImage('/img-assets/drop-s.png'),
    loadImage('/img-assets/drop-l.png'),
    loadImage('/img-assets/drop-xl.png')
  ];
  bowl = loadImage('/img-assets/bowl.png');
}

function setup() {
  createCanvas(500, 800);
  frameRate(30);
  bowlX = width / 2 - bowlWidth / 2;
  bowl.resize(bowlWidth, 0);
}

function draw() {
  background(bkgColor);
  
  moveBowl();
  image(bowl, bowlX, height - bowl.height);
  
  if (frameCount % _SPAWN === 0) {
    drops.push(generateDrop());
  }
  
  fallDrop();
  drawDrop();
  displayScore();
}

function generateDrop() {
  let dropSort = random(dropImages);
  let xSort = constrain(random(width), dropSort.width / 2, width - dropSort.width / 2);
  let ySort = 0;
  let speedSort = random(1, 5);
  
  return { img: dropSort, x: xSort, y: ySort, speed: speedSort };
}

function drawDrop() {
  for (let drop of drops) {
    image(drop.img, drop.x, drop.y);
  }
}

function fallDrop() {
  for (let i = drops.length - 1; i >= 0; i--) {
    drops[i].y += drops[i].speed;
    
    if (drops[i].y > height - bowl.height) {
      if (drops[i].x > bowlX && drops[i].x < bowlX + bowlWidth) {
        score += getDropPoints(drops[i].img);
        drops.splice(i, 1);
      } else if (drops[i].y > height) {
        drops.splice(i, 1);
      }
    }
  }
}

function moveBowl() {
  if (keyIsDown(LEFT_ARROW)) {
    bowlX = max(0, bowlX - 10);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    bowlX = min(width - bowlWidth, bowlX + 10);
  }
}

function getDropPoints(img) {
  if (img === dropImages[0]) return 1;
  if (img === dropImages[1]) return 3;
  if (img === dropImages[2]) return 9;
  return 0;
}

function displayScore() {
  fill(0);
  textSize(24);
  textAlign(RIGHT, TOP);
  text(`Score: ${score}`, width - 20, 20);
}