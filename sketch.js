var rob, rob2, robDist;
let oneDist, weight, weight2;

function setup() {
   createCanvas(1200, 800);
   textSize(15);
   noStroke();

   oneDist = createInput('');
   oneDist.size(100, 20);
   oneDist.position(80, 35);

   weight = createInput('');
   weight.size(100, 20);
   weight.position(80, 85);

   weight2 = createInput('');
   weight2.size(100, 20);
   weight2.position(80, 135);
}

function draw() {
   background(255);

   textSize(15);
   text('robot 1 distance from center in in', 200, 55);
   robDist = oneDist.value();

   rob = weight.value();
   text('robot 1 weight', 200, 105);

   text('robot 2 weight', 200, 155);
   rob2 = weight2.value();

   text('see https://www.geogebra.org/m/aapcdzvf for a better version made by gideonrab', 500, 105);

   findDist();
}

function findDist(){
var rob2Dist = ((rob*robDist)/rob2).toFixed(2);
var rob2Frac = ((rob2Dist/55.625).toFixed(3))*100;

if(rob2Dist <= 55.63){
textSize(50);
text("Robot 2 should be " + rob2Frac + "% of\nthe way from the center or\n" + rob2Dist + " inches.", 80, 220);
} else {
   textSize(50);
text("Robot one is too heavy \nand/or far away.", 80, 220);
}
}