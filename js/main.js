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
	document.getElementById("time").innerHTML = currentTime + " " + currentDate;


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
