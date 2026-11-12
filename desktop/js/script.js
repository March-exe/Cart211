/**
 * SECURITY PASSWORD PROTECTION
 * 
 * this code is meant to limit access to my site via password and username 
 * protection. if you input the correct password and hit 'login' it works
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let correctUsername = "March";
let correctPassword = "1234#";

let loggedIn = false;

function setup() {

    noCanvas();

    let loginButton = select("#login-button");

    loginButton.mousePressed(checkLogin);

    let CancelButton = select("#Cancel-button");

    CancelButton.mousePressed(checkCancel);
}

function checkLogin() {

    console.log("login button works!");

    var userName = document.getElementById("Username").value;
    var password = document.getElementById("password").value;

    if (userName == correctUsername && password == correctPassword) {
        window.location.replace("pages/desktop.html");

    }
    else {
        alert("Invalid information");
        return;
    }
}
function checkCancel() {

    console.log("Cancel button works!");

    document.getElementById("Username").value = "";
    document.getElementById("password").value = "";

}