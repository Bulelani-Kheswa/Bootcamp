/*
function cTemp(celsius){

var cTemp = celsius;
var fTemp = cTemp * 9 / 5 + 32;

return fTemp = cTemp + '\xBOF is + ' fToCel + ' cToFah

 console.log(Fah)
 */

function convertTemp() {

let F = Number(document.getElementById("EnterTemperature").value);
let C = (F - 32) *5/9;
   
   if (!F) alert("enter value")
  
   else if ( isNaN(C))alert("Please enter a value")

   else if ( F < -273.15 )alert("It's absolute zero")

   else if ( C < 16 ) alert(C + "°" + " " + "It's cold (wear jacket)")
   else if( C>= 16 && C<=21  ) alert(C + "°" + " " + "it's warm (wear T_Jeans")
   else if ( C >= 21) alert (C + "°" + " " + "hot (wear short)")

   

}

