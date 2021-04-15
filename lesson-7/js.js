let interval;
let canv;
let ctx;
let px;
let py;

const SNAKE_COLOR_ODD = 'blue';
const SNAKE_COLOR_EVEN = 'yellow';
const APPLE_COLOR = 'green';
const WALL_COLOR = 'red';

// игра началась или нажата первая клавиша (состояния инициализации)
const gs = false;
let fkp = false;
// скорость движения змейки
const baseSpeed = 3;
let speed = baseSpeed;
// скорость (x & y)
let xv = 0;
let yv = 0;

// размер змеи
const pw = 20;
const ph = 20;
// размер корма
const aw = 20;
const ah = 20;

const apples = [];
const wall = [];
const tailPieces = [];
// длина хвоста (1 for 10)
let tailSize = 20;
// безопасная зона
const tailSizeMin = 20;
const cooldown = false;
const score = 0;
let scoreCount = 0;


// функция рисования яблока
function spawnApple() {
  const
    newApple = {
      x: ~~(Math.random() * canv.width - 2 * aw) + aw,
      y: ~~(Math.random() * canv.height - 2 * ah) + ah,
      color: APPLE_COLOR,
    };

  // проверка что яблоко не попало на хвост
  for (let i = 0; i < tailSize.length; i++) {
    if (
      newApple.x < (tailPieces[i].x + pw)
      && newApple.x + aw > tailPieces[i].x
      && newApple.y < (tailPieces[i].y + ph)
      && newApple.y + ah > tailPieces[i].y
    ) {
      spawnApple();
      return;
    }
  }

  apples.push(newApple);
}

function spawnWall() {
  const
    newWall = {
      x: ~~(Math.random() * canv.width - 2 * aw) + aw,
      y: ~~(Math.random() * canv.height - 2 * ah) + ah,
      color: WALL_COLOR,
    };

  // проверка что препятствие не попало на хвост
  for (let i = 0; i < tailSize.length; i++) {
    if (
      newWall.x < (tailPieces[i].x + pw)
      && newWall.x + aw > tailPieces[i].x
      && newWall.y < (tailPieces[i].y + ph)
      && newWall.y + ah > tailPieces[i].y
    ) {
      spawnApple();
      return;
    }
  }

  wall.push(newWall);
}

// итерация рисования экрана
function loop() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canv.width, canv.height);

  px += xv;
  py += yv;

  if (px > canv.width) { px = 0; }
  if (px + pw < 0) { px = canv.width; }
  if (py + ph < 0) { py = canv.height; }
  if (py > canv.height) { py = 0; }

  // раскраска змейки
  tailPieces.forEach((item, index) => {
    ctx.fillStyle = (index % 2) ? SNAKE_COLOR_EVEN : SNAKE_COLOR_ODD;
    ctx.fillRect(item.x, item.y, pw, ph);
  });

  console.log(tailPieces.length);

  tailPieces.push({ x: px, y: py });

  while (tailPieces.length > tailSize) {
    tailPieces.shift();
  }

  // проверка что врезались в себя
  for (let i = tailPieces.length - tailSizeMin; i >= 0; i--) {
    if (
      px < (tailPieces[i].x + pw)
      && px + pw > tailPieces[i].x
      && py < (tailPieces[i].y + ph)
      && py + ph > tailPieces[i].y
    ) {

      tailSize = tailSizeMin;
      speed = baseSpeed;
    }
  }

  // прорисовка еды
  for (let a = 0; a < apples.length; a++) {
    ctx.fillStyle = apples[a].color;
    ctx.fillRect(apples[a].x, apples[a].y, aw, ah);
  }

  for (let a = 0; a < wall.length; a++) {
    ctx.fillStyle = wall[a].color;
    ctx.fillRect(wall[a].x, wall[a].y, aw, ah);
  }

  // проверка на столкновение головы змейки с едой
  for (let a = 0; a < apples.length; a++) {
    if (
      px < (apples[a].x + pw)
      && px + pw > apples[a].x
      && py < (apples[a].y + ph)
      && py + ph > apples[a].y
    ) {
      // при столкновении с едой
      apples.splice(a, 1); // удалить съеденную еду из списка
      scoreCount += 1; // добавить очки
      document.getElementById('score').innerText = scoreCount;
      tailSize += ~~(baseSpeed / 3); // добавить длину при съедении
      speed += 0.3; // добавить скорость при съедении
      spawnApple(); // создать еду
      break;
    }
  }
  for (let a = 0; a < wall.length; a++) {
    if (
      px < (wall[a].x + pw) && px + pw > wall[a].x && py < (wall[a].y + ph) && py + ph > wall[a].y
    ) {
      // при столкновении с едой
      wall.splice(a, 1); // удалить еду из списка
      pause();
    }
  }
}

function start() {
  interval = setInterval(loop, 1000 / 50); // 50 FPS
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

// элемент управления скорости
function changeDirection(evt) {
  if (!fkp && [37, 38, 39, 40].indexOf(evt.keyCode) > -1) {
    fkp = true;
    spawnApple();
    spawnWall();
  }

  if (evt.keyCode === 32) {
    if (interval) {
      pause();
    } else {
      start();
    }
  }

  if (evt.keyCode === 37 && !(xv > 0)) { // left стрелка
    xv = -speed; yv = 0;
  }

  if (evt.keyCode === 38 && !(yv > 0)) { // top стрелка
    xv = 0; yv = -speed;
  }

  if (evt.keyCode === 39 && !(xv < 0)) { // right стрелка
    xv = speed; yv = 0;
  }

  if (evt.keyCode === 40 && !(yv < 0)) { // down стрелка
    xv = 0; yv = speed;
  }
}

function init() {
  canv = document.getElementById('mc');
  ctx = canv.getContext('2d');
  px = (canv.width) / 2;
  py = (canv.height) / 2;
  document.addEventListener('keydown', changeDirection);
  start();
}

window.onload = init;
