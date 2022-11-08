/** @format */

/* Active Hover */
$(".sidebar ul li").on("click", function () {
	$(".sidebar ul li.active").removeClass("active");
	$(this).addClass("active");
});

/* Toggle Sidebar */
$(".toggle").on("click", function () {
	$(".sidebar").toggleClass("maxsimize");
	$(".toggle").toggleClass("maxsimize-on");
	if (sessionStorage.getItem("maxsimized")) {
		sessionStorage.removeItem("maxsimized");
	} else {
		sessionStorage.setItem("maxsimized", true);
	}
});

/* Toggle Dark Mode */

$("#dark-mode").on("click", function () {
	$("body").toggleClass("dark");
	if (sessionStorage.getItem("darkmode")) {
		sessionStorage.removeItem("darkmode");
	} else {
		sessionStorage.setItem("darkmode", true);
	}
});

onload = function () {
	if (sessionStorage.getItem("darkmode")) {
		sessionStorage.getItem("darkmode");
		$("body").addClass("dark");
		$("#dark-mode").prop("checked", true).change();
		sessionStorage.setItem("darkmode", true);
	}
	if (sessionStorage.getItem("maxsimized")) {
		sessionStorage.getItem("maxsimized");
		$(".sidebar").addClass("maxsimize");
		$(".toggle").addClass("maxsimize-on");
		sessionStorage.setItem("maxsimized", true);
	}
};

/* Greetings */
var today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
	$(".greetings").text("Good Morning");
}

if (curHr >= 12 && curHr < 18) {
	$(".greetings").text("Good Afternoon");
}

if (curHr >= 18) {
	$(".greetings").text("Good Evening");
}
