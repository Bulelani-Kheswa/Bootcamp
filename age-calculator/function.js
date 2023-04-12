
function CalcAge() {

let year = Number(document.getElementById("EnterYear").value);
let age = (2023-year);
  // console.log(age)

  answers = document.getElementById("results")
  answers.innerHTML = age

  if ( !year ) answers.innerHTML=("enter born-year")
  else if ( age < 0) answers.innerHTML=("age can't be negitive")
  else if (year < 0) answers.innerHTML=("year can't be negitive")
  else if ( age >= 0) answers.innerHTML=(age)
}

// if ( !year ) {alert("enter born-year")}
// else if ( age < 0) {alert("age can't be negitive")}
// else if (year < 0) {alert("year can't be negitive")}
// else if ( age >= 0) {alert(age)}

    
 // }CalcAge(1999)




// let array = [5,4,3,2,1,0,1,2,3,4,5]

// let sum = 0 ;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i]

// }
// console.log(sum);
