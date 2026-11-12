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
    let username = select("#username").value();
    let password = select("#password").value();

    if (username === correctUsername && password === correctPassword) {
        loggedIn = true;
        select("#login-error").html("Login successful!");

    } else {
        select("#login-error").html("Incorrect username or password.");
    }
}