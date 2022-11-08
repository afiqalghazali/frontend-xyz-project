/** @format */

/* Active Hover */
$(".sidebar ul li").on("click", function () {
	$(".sidebar ul li.active").removeClass("active");
	$(this).addClass("active");
});

/* Toggle Sidebar */
$(".toggle").on("click", function () {
	$(".sidebar").toggleClass("minimize");
	$(".toggle").toggleClass("minimize-on");
	if (sessionStorage.getItem("minimized")) {
		sessionStorage.removeItem("minimized");
	} else {
		sessionStorage.setItem("minimized", true);
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
		$("#dark-mode").bootstrapToggle("on");
		sessionStorage.setItem("darkmode", true);
	}
	if (sessionStorage.getItem("minimized")) {
		sessionStorage.getItem("minimized");
		$(".sidebar").addClass("minimize");
		$(".toggle").addClass("minimize-on");
		sessionStorage.setItem("minimized", true);
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
