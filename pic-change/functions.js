
let images;
if(sessionStorage.getItem("pics")){images=JSON.parse(sessionStorage.getItem("pics"))}
else{images = [ "one.jpg", "two.jpeg", "three.jpg"]}


// let images = [ "one.jpg", "two.jpeg", "three.jpg"]
// img = document.getElementById("next")


let i = 0;

img.src = images[i];


function AddSub(){
let pic = document.getElementById("submit").value;

if(pic ==""){
return alert("image url should not be empty")
}

for(let k = 0; k< pic.length; k++)

if(images == pic[k]){
    return alert("images already exist")

}

images.push(pic);
sessionStorage.setItem('pics',JSON.stringify(images))
}

// function AddSub(){
//     let pic = document.getElementById("submit").value
//     images.push(pic);
    
//     document.getElementById("submit").value = '';
    
//     sessionStorage.setItem('pics',JSON.stringify(images))
//     let B = sessionStorage.getItem(JSON.parse('pics'))




function next() {

   i++;

    if(i >=images.length)
    {i = 0}
    img.src = images[i];
}

function prev() {
   
       i--;
        if(i < 0)
        {i = images.length - 1}
        img.src = images[i];
    }

    function MinusSub(){
        let pic = document.getElementById("submit").value
        images.splice(i,1);
        
        document.getElementById("submit").value = '';
        
        sessionStorage.setItem('pics',JSON.stringify(images))
    }


//     function next() {

//    i++;

//     if(i >=images.length)
//     {i = 0}
//     img.src = images[i];
// }

// function prev() {
   
//        i--;
//         if(i < 0)
//         {i = images.length - 1}
//         img.src = images[i];
//     }


    // let B = sessionStorage.getItem(JSON.parse('pics'))