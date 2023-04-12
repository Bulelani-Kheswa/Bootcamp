

function convertTemp() {

let F = Number(document.getElementById("EnterTemperature").value);
let C = (F - 32) *5/9;
   
answers = document.getElementById("results")
answers.innerHTML = C


   if (!F) answers.innerHTML("enter value")
  
   else if ( isNaN(C))answers.innerHTML("Please enter a value")
   else if ( F < -273.15 )alanswers.innerHTMLert("It's absolute zero")
   else if ( C < 16 ) alanswers.innerHTMLert(C + "°" + " " + "It's cold (wear jacket)")
   else if( C>= 16 && C<=21  ) answers.innerHTML(C + "°" + " " + "it's warm (wear T_Jeans")
   else if ( C >= 21) answers.innerHTML(C + "°" + " " + "hot (wear short)")

}






/*
function cTemp(celsius){

var cTemp = celsius;
var fTemp = cTemp * 9 / 5 + 32;

return fTemp = cTemp + '\xBOF is + ' fToCel + ' cToFah

 console.log(Fah)
 */