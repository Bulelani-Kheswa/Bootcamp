// const button = document.querySelector('button');
// const ConvertTemp = document.getElementById("EnterTemp");


// Button to Convert Degrees

function ConvertTemp() {
let F = Number(document.getElementById("EnterTemp").value)
let C = (F-32)*5/9;
 //console.log(C)

if ( C < 16){
    alert(C + "" + "" + "It's cold wear a jacket");
}
else if( C <= 21 && C >= 16){
    alert(C + "" + "" + "It's warm wear T_jeans");
}
else if (21 < C)
    alert(C + "" + "" + "hot wear short");

}
//ConvertTemp(10)