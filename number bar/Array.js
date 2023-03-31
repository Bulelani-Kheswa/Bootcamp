/*let array = [2,4,6,8,3,5,7,9]

    array.pop(9);
    console.log(array)

    array =[2,4,6,8,3,5,7]
    array.method.push(1)
    console.log(array)

    array =[2,4,6,8,3,5,7,1]
    array.shift(2)
    console.log(array)

    array =[2,4,6,8,3,5,7,1]
    array.unshift(2)
    console.log(array)


console.log (array)

*/

let numbers = [20,311,12,11,13,15,9,4,0,10]

let even = [];
let odd = [];

for(let i = 0; i < numbers.length ; i++){

    if (numbers[i]%2 === 0){

        even.push(numbers[i])
    }
        else{
            odd.push(numbers[i])
}
}

console.log(even)

console.log(odd)
