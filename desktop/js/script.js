/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let correctUsername = "March";
let correctPassword = "1234";

let loggedIn = false;

function setup() {
    noCanvas();

    let loginButton = select("#login-button");

    loginButton.mousePressed(checkLogin);
}

function checkLogin() {
    var userName = document.getElementById("Username").value;
    var password = document.getElementById("password").value;

    if (userName == "March" && password == "1234#") {
        window.location.replace("/desktop/assets/js/script.js");

    }
    else {
        alert("Invalid information");
        return;
    }
}