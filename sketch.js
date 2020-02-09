// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var r = 255;
var g = 204;
var b = 0;
var brush;

function setup(){
  createCanvas(1200,600);
  noStroke();
}

function draw(){
  
  fill(r,g,b);
  brush=ellipse(mouseX,mouseY,40,40);
  
  r=map(mouseX, 0, width, 255, 0);
  g=map(mouseX, 0, width, 204, 255);
  b=map(mouseX, 0, width, 0,0);
  //background(204);
  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
}