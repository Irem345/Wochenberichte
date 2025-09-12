function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  
  
  
  // Hals
  var neckX = width * 0.5;
  var neckY = height * 0.3;
  var neckWidth = width * 0.05;
  var neckHeight = height * 0.07;

  fill(245, 211, 177);
  noStroke();
  rect(neckX - neckWidth / 2, neckY, neckWidth, neckHeight);
  
   // Oberkörper 
  var bodyX = width * 0.5;
  var bodyY = neckY + neckHeight;
  var bodyWidthTop = width * 0.12;
  var bodyWidthBottom = width * 0.2;
  var bodyHeight = height * 0.25;

  fill(245, 211, 177);
  beginShape();
  vertex(bodyX - bodyWidthTop / 2, bodyY);
  vertex(bodyX + bodyWidthTop / 2, bodyY);
  vertex(bodyX + bodyWidthBottom / 2, bodyY + bodyHeight);
  vertex(bodyX - bodyWidthBottom / 2, bodyY + bodyHeight);
  endShape(CLOSE);

  // Linker Arm 
  var armStartX = bodyX - bodyWidthTop / 2;
  var armStartY = bodyY + height * 0.04;
  var armEndX = armStartX - width * 0.2;
  var armEndY = armStartY - height * 0.02;
  var armThickness = height * 0.03;

  stroke(245, 211, 177);
  strokeWeight(armThickness);
  line(armStartX, armStartY, armEndX, armEndY);

  // Rechter Arm (seitlich ausgestreckt nach rechts)
  var armStartXRight = bodyX + bodyWidthTop / 2;
  var armStartYRight = bodyY + height * 0.05;
  var armEndXRight = armStartXRight + width * 0.2;
  var armEndYRight = armStartYRight - height * 0.02;
  var armThicknessRight = height * 0.03;

  stroke(245, 211, 177);
  strokeWeight(armThicknessRight);
  line(armStartXRight, armStartYRight, armEndXRight, armEndYRight);
  
  
  fill(255, 153, 203)
  noStroke()
  
  //Kleid 1 seite
  
  var x1 = width * 0.4; // 2
  var y1 = height * 0.63;
  
  var x2 = width * 0.5; // 1
  var y2 = height * 0.42;
  
  var x3 = width * 0.569; //4
  var y3 = height * 0.368;
  
  var x4 = width * 0.65;  // 3
  var y4 = height * 0.63;
  
  quad(x1, y1, x2, y2, x3, y3, x4, y4, )
  
  
  // kleid 2 seite
  
  //Kleid 1 seite
  
   fill(255, 153, 203)
  noStroke()
//Kleid 1 seite
  
  var x1 = width * 0.4; // 2
  var y1 = height * 0.63;
  
  var x2 = width * 0.435; // 1
  var y2 = height * 0.372;
  
  var x3 = width * 0.55; //4
  var y3 = height * 0.437;
  
  var x4 = width * 0.65;  // 3
  var y4 = height * 0.63;
  
  quad(x1, y1, x2, y2, x3, y3, x4, y4, )
  
  var x1 = width * 0.64; // 1
  var y1 = height * 0.6;
  
  var x2 = width * 0.9;// 2
  var y2 = height * 0.9;
  
  var x3 = width * 0.53;// 3
  var y3 = height * 0.95;
  
  
  triangle(x1, y1, x2, y2, x3, y3)
  
  
  
  var x1 = width * 0.64; // 1
  var y1 = height * 0.6;
  
  var x2 = width * 0.4;// 2
  var y2 = height * 0.6258;
  
  var x3 = width * 0.53;// 3
  var y3 = height * 0.95;
  
  
  
  triangle(x1, y1, x2, y2, x3, y3)
  
  
  
  fill(245, 211, 177);
  
  drawHead(width * 0.15);
  
}

function drawHead(widthCenterHead, heightCenterHead) {
  

var centerX = width * 0.5;      // mitten
var centerY = height * 0.5;     // bisschen unten von mitte

var ovalWidth = widthCenterHead * 0.3;    // breite oval 
var ovalHeight = height * 0.4;  // grösse oval 

ellipse(centerX, centerY, ovalWidth, ovalHeight); // oval wird gezeichnet
  
    // Wimpern rechtes Auge
  var rightEyeX = widthCenterHead * 0.55;
  var rightEyeY = height * 0.45;

  stroke(0);
  strokeWeight(1);
  line(rightEyeX, rightEyeY, rightEyeX + 5, rightEyeY - 10);
  line(rightEyeX, rightEyeY, rightEyeX, rightEyeY - 12);
  line(rightEyeX, rightEyeY, rightEyeX - 5, rightEyeY - 10);

  // Wimpern linkes Auge
  var leftEyeX = widthCenterHead * 0.45;
  var leftEyeY = height * 0.45;

  line(leftEyeX, leftEyeY, leftEyeX + 5, leftEyeY - 10);
  line(leftEyeX, leftEyeY, leftEyeX, leftEyeY - 12);
  line(leftEyeX, leftEyeY, leftEyeX - 5, leftEyeY - 10);

  
  fill(255,255,255)
  var centerX = width * 0.55;
var centerY = height * 0.45; 
  
var circleWidth = widthCenterHead * 0.03;
var circleHeight = height * 0.02;

circle(centerX, centerY, circleWidth, circleHeight)
  
  var centerX = width * 0.45;
var centerY = height * 0.45; 
  
var circleWidth = widthCenterHead * 0.03;
var circleHeight = height * 0.02;

circle(centerX, centerY, circleWidth, circleHeight)

  fill(0, 0, 0)
var centerX = width * 0.55;   //Auge rechts
var centerY = height * 0.45; 
  
var circleWidth = widthCenterHead * 0.01;
var circleHeight = height * 0.02;

circle(centerX, centerY, circleWidth, circleHeight)
  
  fill(0, 0, 0)
var centerX = width * 0.45;  //Auge links
var centerY = height * 0.45; 
  
var circleWidth = widthCenterHead * 0.01;
var circleHeight = heightCenterHead * 0.02;

circle(centerX, centerY, circleWidth, circleHeight)
  
  
  // Mund (schwarz, halb-kreis)
  
  var mouthX = 0.5 * width;
  var mouthY = 0.58 * height;
  var mouthWidth = 0.08 * widthCenterHead;
  var mouthHeight = 0.08 * heightCenterHead;
  fill(0, 0, 0);
  arc(mouthX, mouthY, mouthWidth, mouthHeight, 0, PI, CHORD);

  fill(245, 211, 177);
  noStroke();
  arc(mouthX, mouthY, mouthWidth, mouthHeight, PI, TWO_PI, CHORD)
  
  //Nase
  
  // Nase mit spitze nach links
  var x1 = widthCenterHead * 0.5;   // rechte ecke oben
  var y1 = heightCenterHead * 0.49;
  var x2 = widthCenterHead * 0.5;   // rechte ecke unten
  var y2 = heightCenterHead * 0.53;
  var x3 = widthCenterHead * 0.46;  // spitze links
  var y3 = heightCenterHead * 0.51;

  // Füllung in Hautfarbe
  fill(245, 211, 177);
  noStroke();
  triangle(x1, y1, x2, y2, x3, y3);

  // Kontur auf zwei Seiten (ich habe KI(copilot)gefragt wie man es schreibt.also wie man die einzelne striche wegmacht.)
  
  stroke(100);
  strokeWeight(1);
  line(x1, y1, x3, y3); // obere Seite
  line(x2, y2, x3, y3); // untere Seite
  
    // Haare als Halbkreis auf dem Kopf
  var hairX = widthCenterHead * 0.5;
  var hairY = heightCenterHead * 0.4; // oberhalb des Gesichts
  var hairWidth = widthCenterHead * 0.28;
  var hairHeight = heightCenterHead * 0.25;

  fill(255, 222, 0);
  noStroke();
  arc(hairX, hairY, hairWidth, hairHeight, PI, TWO_PI, CHORD); // PI und Chord erzeugen denn halnkreis.
  

  var centerX = width * 0.5;  //Dut
var centerY = height * 0.25; 
  
var circleWidth = widthCenterHead * 0.155;
var circleHeight = heightCenterHead * 0.3;

circle(centerX, centerY, circleWidth, circleHeight)
  
 // Haarclip (kleiner Kreis auf Dut)
  var hairClipX = widthCenterHead * 0.57;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
   // Haarclip (kleiner Kreis auf Dut)
  var hairClipX = widthCenterHead * 0.55;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;
  
    stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
  // Haarclip (kleiner Kreis auf Dut)
  var hairClipX = widthCenterHead * 0.53;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
    // Haarclip (kleiner Kreis auf Dut)
  var hairClipX = widthCenterHead * 0.51;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
    var hairClipX = widthCenterHead * 0.49;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
     var hairClipX = widthCenterHead * 0.47;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
     var hairClipX = widthCenterHead * 0.45;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);

     var hairClipX = widthCenterHead * 0.43;
  var hairClipY = heightCenterHead * 0.28;
  var hairClipSize = widthCenterHead * 0.03;

  stroke(0);
  fill(255, 0, 150); // pink
  circle(hairClipX, hairClipY, hairClipSize);
  
}