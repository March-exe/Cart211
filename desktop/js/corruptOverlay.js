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

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('geoOverlay');

    clear();
    shapes();

}


function shapes() {


    noFill();
    stroke(0, 255, 0);

    rect(100, 100, 200, 200);
    line(100, 100, 400, 400);
    ellipse(300, 300, 100, 100);


    rect(0, windowHeight - 50, windowWidth, 50)
}
