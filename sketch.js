let img1,img2;
let currentState =1;
let x = 26;
let y = 590;
let nox;
let noy;
let now;
let noh;
// yes
let yesx = 227;
let yesy = 662;
let yesw = 142;
let yesh = 47;

function preload(){
  img1 = loadImage("Group 106.png");
  img2 = loadImage("Group 104.png");
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  // no
 nox = windowWidth - x;
 noy = windowHeight - y;
 now = 142;
 noh = 47;
}

function draw() {
  
 
  if(currentState === 1)
    {
  background("#F35F3C");
  drawimg2();
      console.log(currentState);
       text("x : " + mouseX,40,40);
      text(" y : " + mouseY,80,40);
     // console.log(windowHeight);
    }else if (currentState === 2)
      {
  background("#FFC5B7");
  drawimg1();
      }
  
}
function drawimg1()
{
  image(img1,windowWidth/2, windowHeight/2);
}
function drawimg2()
{
  image(img2,windowWidth/2, windowHeight/2);
}
function mousePressed() {
  if(currentState === 1)
    {
      if (
      mouseX > yesx &&
      mouseX < yesx + yesw &&
      mouseY > yesy &&
      mouseY < yesy + yesh
    ) {
      currentState = 2;
        console.log("done");
      }
    }if(currentState === 2)
    {
      if (
      mouseX > yesx &&
      mouseX < yesx + yesw &&
      mouseY > yesy &&
      mouseY < yesy + yesh
    ) {
      currentState = 2;
        console.log("done");
      }
    }
}
function touchStarted() {
  mousePressed(); // Use the same logic
  return false; // Prevent default browser touch behavior
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}