//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let message;

//Start coding here
switch(lightBulbStatus) {
  case "Broken":
    message = "Light bulb is Broken."
    break;
  case "On":
    message = "Light bulb is On."
    break;
  case "Off":
  message = "Light bulb is Off."
  break;
  default:
  message = "Please choose the correct input (On/Off/Broken)"
} 
console.log(message);