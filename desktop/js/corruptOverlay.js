/**
 * Geometric overlap
 * 
 * This code is meant to create a messy geometric overlay
 * 
 * 
 *  */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
"use strict";
let keyImg
let cityImg
let elevationImg
let active = true
let holding = false
let drag = false

let keyInfo = {
    x: 100,
    y: 100,
    s: 50,
}

async function setup() {
    keyImg = await loadImage('../assets/images/dithered-keyNobg.png');
    cityImg = await loadImage('../assets/images/dithered-montreal.png');
    elevationImg = await loadImage('../assets/images/dithered-elevation.png');


    keyInfo.x = random(100, windowHeight - 100)
    keyInfo.y = random(100, windowHeight - 100)

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('geoOverlay');

    clear();

    //drawWaveGrid();

    shapes();
    imgs();




}

function draw() {

    moveKey();

    tint(0, 255, 0, 100)
    image(keyImg, keyInfo.x, keyInfo.y, keyInfo.s, keyInfo.s);

    checkInside();


}




function shapes() {


    noFill();
    stroke(0, 255, 0);

    rect(windowWidth - 950, windowHeight - 500, 400, 300);

    line(random(0, windowWidth), random(0, windowHeight), 100, 100);
    line(random(0, windowWidth), random(0, windowHeight), 100, 100);
    line(random(0, windowWidth), random(0, windowHeight), 100, 100);
    line(random(0, windowWidth), random(0, windowHeight), 100, 100);
    line(random(0, windowWidth), random(0, windowHeight), 100, 100);
    line(random(0, windowWidth), random(0, windowHeight), 100, 100);
    line(random(0, windowWidth), random(0, windowHeight), 100, 100);

    ellipse(random(0, windowWidth), random(0, windowHeight), 100, 100);
    ellipse(random(0, windowWidth), random(0, windowHeight), 100, 100);
    ellipse(random(0, windowWidth), random(0, windowHeight), 100, 100);
    ellipse(random(0, windowWidth), random(0, windowHeight), 100, 100);

    ellipse(random(0, windowWidth), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight));
    ellipse(random(0, windowWidth), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight));
    ellipse(random(0, windowWidth), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight));
    ellipse(random(0, windowWidth), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight));



    ellipse(windowWidth - 400, windowHeight - 300, 100, 100);



    rect(0, windowHeight - 50, windowWidth, 50)



}
function imgs() {
    push();


    tint(255, 50)
    image(cityImg, windowWidth - 1560, -225, windowWidth, windowWidth + 200);


    // image(elevationImg, windowWidth - 1000, -100, 845, 800);

    pop();


    //check overlap function comes from pippin



}
//checks to see if the mouse is pressed on top of the key image
function mousePressed() {
    if (mouseX > keyInfo.x && mouseX < keyInfo.x + keyInfo.s &&
        mouseY > keyInfo.y && mouseY < keyInfo.y + keyInfo.s) {
        drag = true;
    }
}


//a second measure to ensure that drag is always false when not on the keyImg. if you release the mouse after dragging it around it will stop
function mouseReleased() {

    if (mouseX > keyInfo.x && mouseX < keyInfo.x + keyInfo.s && mouseY > keyInfo.y && mouseY < keyInfo.y + keyInfo.s) {

        drag = false
    }
    else { drag = false }

}

//the key postiion moves with the curosr when its clicked
function moveKey() {


    if (mouseX > keyInfo.x && mouseX < keyInfo.x + keyInfo.s && mouseY > keyInfo.y && mouseY < keyInfo.y + keyInfo.s) {
        holding = true
        if (holding == true) {
            document.body.style.cursor = "pointer";
        }
    }
    else {
        holding = false
        if (holding == false) { document.body.style.cursor = "crosshair"; }

    }
    //if both drag and holding are true then the keyImg can be 'picked up' and moved
    if (drag == true && holding == true) {
        keyInfo.x += mouseX - pmouseX;
        keyInfo.y += mouseY - pmouseY;
    }



}


//checks to see if the key is inside the rectangle and if so a hyper link appears
function checkInside() {


    // rect(windowWidth - 950, windowHeight - 500, 400, 300);

    if (keyInfo.x > (windowWidth - 950) && keyInfo.x < (windowWidth - 950 + 400) && keyInfo.y > (windowHeight - 500) && keyInfo.y < (windowHeight - 500 + 300)) {
        console.log("INSIDE");

        document.getElementById('hiddenLink').style.display = "block";

    }
    else {

        document.getElementById('hiddenLink').style.display = "none";
    }
}

function drawWaveGrid() {


    noFill();
    stroke(0, 255, 0, 120);
    strokeWeight(1);

    // Horizontal lines
    for (let row = 0; row <= 50; row++) {

        let baseY = map(row, 0, 36, -100, height + 100);

        beginShape();

        for (let x = 0; x <= width; x += 8) {

            let point = warpPoint(x, baseY);

            vertex(point.x, point.y);
        }

        endShape();
    }

    // Vertical lines
    for (let col = 0; col <= 100; col++) {

        let baseX = map(col, 0, 48, -100, width + 100);

        beginShape();

        for (let y = 0; y <= height; y += 8) {

            let point = warpPoint(baseX, y);

            vertex(point.x, point.y);
        }

        endShape();
    }
}


// Distorts the grid coordinates
function warpPoint(x, y) {

    let newX = x + sin(y * 0.012 + x * 0.020) * 80;

    let newY = y + sin(x * 0.020 - y * 0.003) * 100;

    return {
        x: newX,
        y: newY
    };
}

