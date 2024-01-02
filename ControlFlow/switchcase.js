//Syntaxx switch case


switch (expression) {
    case value1:
      // Code to be executed if expression === value1
      break;
    case value2:
      // Code to be executed if expression === value2
      break;
    // More cases can be added
    default:
      // Code to be executed if expression doesn't match any case
  }
  

  let dayNumber = 3;
let day;

switch (dayNumber) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid day";
}

console.log("The day is: " + day);
