
/* Task 01. Ternary operator using Create a function to show live class status to the students.*/


  let username ="start";
  let livestatus = null;
  console.log(livestatus);


  livestatus = (username === "notstart" ? 'Kanish Your Live class Scheduled in Entri App! Check Out!' : 'Kanish Your Live Class Yet to Begin!');

  console.log(livestatus);





/**
  * Task 02. Create a function to display Batch Schedule details and Mentor Name also
  * B7
  * Tuesday and Thursday
  */

 function showschedule(batchcode) {
    let Schedule;

    if (batchcode =="B6"){
        Schedule = "Sindhu Mam is Available! " +"Wednesday & Friday";
    } else if (batchcode == "B7" || batchcode == "M2"){
        Schedule = "Kanish is Available! "+"Tuesday & Thursday";
    } else if (batchcode == "B8"){
        Schedule = "Kumar is Available! "+"Monday & Friday";
    } else{
        Schedule ="Mentor Not Available!"
    }
    console.log(Schedule);

    
 }
 showschedule("B7");
 showschedule("B8");
 showschedule("B6");
