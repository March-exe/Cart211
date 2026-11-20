/**
 * DIGITAL CLOCK
 * 
 * this code is meant to limit access to my site via password and username 
 * protection. if you input the correct password and hit 'login' it works
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let logoutButton
let garbageButton
function setup() {




}
//lout out in start menu
logoutButton = document.getElementById("log-out");

logoutButton.addEventListener("click", logout);
//recycling bin content action
garbageButton = document.getElementById("dump");

garbageButton.addEventListener("click", garbage);

//recycling bin icon
garbageIcon = document.getElementById("dump");

garbageIcon.addEventListener("click", garbage);


function logout() {

    console.log("LOGOUT works!");

    window.location.href = "../index.html";

}

function garbage() {

    console.log("GARBAGE works!");

    window.location.href = "./recyclingBin.html";

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