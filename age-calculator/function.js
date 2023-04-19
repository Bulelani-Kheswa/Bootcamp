
function CalcAge() {


  let age1 = document.getElementById("EnterYear").value

  let d = new Date();
  let year = d.getFullYear();

  let age = (year - age1);
  results = document.getElementById("results")




results.innerHTML = age

let ages = document.getElementById()
sessionStorage.setItem('Kage').age;

kage.push(age);

// console.log(sessionStorage.getItem(CalcAge))

  // answers = document.getElementById("results")
  // answers.innerHTML = age

  

  if ((!year) ) answers.innerHTML=("enter born-year")
  else if ( age < 0) answers.innerHTML=("age can't be negitive")
  else if (year < 0) answers.innerHTML=("year can't be negitive")
  else if ( age >= 0) answers.innerHTML=(age)


  // if ( !year ) answers.innerHTML=("enter born-year")
  // else if ( age < 0) answers.innerHTML=("age can't be negitive")
  // else if (year < 0) answers.innerHTML=("year can't be negitive")
  // else if ( age >= 0) answers.innerHTML=(age)
}
CalcAge(year)

// if ( !year ) {alert("enter born-year")}
// else if ( age < 0) {alert("age can't be negitive")}
// else if (year < 0) {alert("year can't be negitive")}
// else if ( age >= 0) {alert(age)}

    




// let array = [5,4,3,2,1,0,1,2,3,4,5]

// let sum = 0 ;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i]

// }
// console.log(sum);
