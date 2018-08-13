    var user = {
        name: "Evan Winston",
        image: "img/evan.jpg",
        progress: 0.66
    }

    var courseArr = [{
            title: "Readings in World Literature",
            subject: "Social Studies"
        }, {
            title: "Theory of Numbers",
            subject: "Mathematics"
        }, {
            title: "Farsi 301",
            subject: "Languages"
        }];

    var activityArr = [{
            title: "Completed SOSC 503 Module 7 Quiz",
            subject: "Submitted for review 6/11/18 at 10:39PM"
        }, {
            title: "Commented in MATH104 Tuesday Discussion Group",
            subject: "Lorem ipsum dolores sit..."
        }, {
            title: "Enrolled in FARS301",
            subject: "Cohort begins 9/08/18"
        }];

    var accountArr = [{
            title: "Enrolled since: ",
            subject: "9/06/2017"
        }, {
            title: "Enrollment Status: ",
            subject: "Active Student"
        }, {
            title: "Department",
            subject: "Computer Science"
        }];

//function that displays the date and time
function newTime() {
	var today = new Date();
	var hours = addZero(formatHrs(today.getHours()));
	var minutes = addZero(today.getMinutes());
	var seconds = addZero(today.getSeconds());
	var meridian = ampm(today.getHours()); 

//displays the current time in the hh:mm:ss format
	var currentTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

	console.log(currentTime);


//displays the current month, day, and year
	var day = addZero(today.getDate());
	var month = addZero(today.getMonth() + 1);
	var year = today.getFullYear() - 2000;
//displays the current date in the dd/mm/yy format
	var currentDate = month + "/" + day + "/" + year;
//prints this time and date onto document
	document.getElementById("time").innerHTML = currentDate + " | " + currentTime;


//runs this time/date function every second 
	setTimeout(function(){
		newTime();
	}, 1000)
}
//adds a zero to single digit 
function addZero(time) {
			if(time < 10) {
				return "0" + time;
			} else {
				return time;
		}
	}

//changes military time to regular time
	function formatHrs(hours) {
			if(hours > 12) {
				return hours - 12;
			} else {
				if (hours == 0) {
					return "12";
				}
				return hours;
		}
	}
//adds the am/pm
function ampm(hours) {
	if(hours > 12) {
		return "PM";
	} else {
		return "AM";
	}
}
newTime();

//function that produces a four-digit random number between 1000 and 10000
function randNum(){
	return Math.floor((Math.random() * 9000) + 1000);
	console.log(x);
};    

document.getElementById("userId").innerHTMLs = randNum()

// function expandMenu(){
// 	$(".fas fa-bars").click(function() {
// 	$(".fas fa-home .fas fa-sign-out-alt").show();
// 	});

// $(".fas fa-bars").click(function() {
// 	$(".fas fa-home .fas fa-sign-out-alt").hide();
// 	});
// };
