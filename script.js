  



$(document).ready(function () {
	var text9 = $("#9AM");
	var text10 = $("#10AM");
	var text11 = $("#11AM");
	var text12 = $("#12AM");
	var text13 = $("#1PM");
	var text14 = $("#2PM");
	var text15 = $("#3PM");
	var text16 = $("#4PM");
	var text17= $("#5PM");



	// create variable to log current hour
	var currentHour = moment().hour();
	console.log(currentHour);
	// Display current day/time
	$("#currentDay").text(moment().format("LLLL"));


for ( var i = 9; i < 18; i++ ) 

{ 
	if(i < currentHour) {
	x = String(i);
	console.log(x);	
	$("#" + x).addClass("past")
	}
	else if (i === currentHour) {
	x = String(i);
	$("#" + x).addClass("present")
	}
	else if ( i > currentHour) {
	x = String(i);
	$("#" + x).addClass("future")	
	}

	}
	
// Save user input into local storage
	$(".saveBtn").click(function(event){
		event.preventDefault();    
	  
	localStorage.setItem("input9", text9.val());
	localStorage.setItem("input10", text10.val());
	localStorage.setItem("input11", text11.val());
	localStorage.setItem("input12", text12.val());
	localStorage.setItem("input13", text13.val());
	localStorage.setItem("input14", text14.val());
	localStorage.setItem("input15", text15.val());
	localStorage.setItem("input16", text16.val());
	localStorage.setItem("input17", text17.val());
		
	
	});	

	// append local storage to HTML
	
	$("#9AM").append(localStorage.getItem("input9"));
	$("#10AM").append(localStorage.getItem("input10"));
	$("#11AM").append(localStorage.getItem("input11"));
	$("#12AM").append(localStorage.getItem("input12"));
	$("#1PM").append(localStorage.getItem("input13"));
	$("#2PM").append(localStorage.getItem("input14"));
	$("#3PM").append(localStorage.getItem("input15"));
	$("#4PM").append(localStorage.getItem("input16"));
	$("#5PM").append(localStorage.getItem("input17"));

});
