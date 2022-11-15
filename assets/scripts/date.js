/**
 * /* Date
 *
 * @format
 */

let time = new Date();
let day = time.getDay();
let month = time.getMonth();
let date = time.getDate();
let year = time.getFullYear();

// Day
if (day === 0) {
	day = "Senin";
} else if (day === 1) {
	day = "Selasa";
} else if (day === 2) {
	day = "Rabu";
} else if (day === 3) {
	day = "Kamis";
} else if (day === 4) {
	day = "Jumat";
} else if (day === 5) {
	day = "Sabtu";
} else if (day === 6) {
	day = "Minggu";
}

// Month
if (month === 0) {
	month = "January";
} else if (month === 1) {
	month = "February";
} else if (month === 2) {
	month = "March";
} else if (month === 3) {
	month = "April";
} else if (month === 4) {
	month = "May";
} else if (month === 5) {
	month = "June";
} else if (month === 6) {
	month = "July";
} else if (month === 7) {
	month = "August";
} else if (month === 8) {
	month = "September";
} else if (month === 9) {
	month = "October";
} else if (month === 10) {
	month = "November";
} else if (month === 11) {
	month = "December";
}

let currentDate = day + ", " + date + " " + month + " " + year;
$("#date").html(currentDate);
