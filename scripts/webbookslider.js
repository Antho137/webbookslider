"use strict";

// Functions that display current day, and current year.

function currentDay() {
	let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let now = new Date();
	let thisDay = now.getDay();
	let thisDate = now.getDate();
	let thisMonth = now.getMonth();
	let thisYear = now.getFullYear();
	let today =  "Today is " + weekDays[thisDay] + ", " + months[thisMonth] + " " + thisDate + ", " + thisYear;
	return today;	
}

function currentYear() {
	let now = new Date();
	let thisYear = now.getFullYear();
	return thisYear;	
}

function createEventListeners() {
	document.getElementById("today").innerHTML = currentDay();
    document.getElementById("year").innerHTML = currentYear();	
}
 
window.addEventListener("load", createEventListeners);