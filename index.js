//jquery for changing first word to bold
$(document).ready(function() {
    $("#boldButton").click(function() {
        $(".bold").css('font-weight', 'bold');
    });

    //single click event appends new paragraph "This is a click event"
    //double click event append new paragraph "This is a double click event"

    var delay = 200,
        clicks = 0,
        timer = null;


    $("#clickMe").on("click", function(e) {
            clicks++; //count clicks
            if (clicks === 1) {
                timer = setTimeout(function() {
                    $("#snglClickP").append("This is a click event");
                    clicks = 0;
                }, delay);
            } else {
                clearTimeout(timer); //prevent single-click action
                $("#dblClickP").append("This is a double click event");
                clicks = 0;
            }
        })
        .on("dblclick", function(e) {
            e.preventDefault(); //cancel systems double-click event

        });
    //button creates random color for background color
    $("#backgroundButton").click(function() {
        var randomColor = (Math.random() * 0xFFFFFF >> 0).toString(16)
        $("#changeColor").css('background-color', '#' + randomColor);
    });

});

/* 
Original Code, does not have timeout method attached.When double clicked, single click
gets fired as well

CODE
 $("#snglClickP").append("This is a click event");
 	});

 $("#clickMe").on("dblclick", function() {

 $("#dblClickP").append("This is a double click event");
 });

*/


function codeTest() {

    //*Display the current day with the following format: Today is Sunday.
    function day() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[d.getDay()];
        document.getElementById("header").innerHTML = 'Today is ' + n;
    };

    /*Display the current time with the following format: 
     The current time is 9 AM : 50 : 22*/
    function time() {
        var currentTime = new Date();
        hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
        seconds = currentTime.getSeconds();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        var newTime = hours + suffix + ":" + minutes + ":" + seconds;

        document.getElementById("time").innerHTML = 'The current time is ' + newTime;
    }


    //Create a string that displays Origin Code Academy Rocks!
    function animateString() {
        var element = document.getElementById("string");
        var textNode = element.childNodes[0]; // assuming no other children  
        var text = textNode.data;

        setInterval(function() {
            text = text[text.length - 1] + text.substring(0, text.length - 1);
            textNode.data = text;
        }, 100);
    };

    /*Create a Bubble Sort 
    Array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] 
    Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] 
    Output the bubble-sorted result using a console.log statement.*/

    var a = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

    function bubbleSort(a) {
        var swap;
        do {
            swap = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swap = true;
                }
            }
        } while (swap);
    }

    //call functions in order to load when page opens
    day()
    time()
    animateString();
    bubbleSort(a);
    console.log(a);
};
