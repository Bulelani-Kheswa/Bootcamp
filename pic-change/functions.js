

let images = [ "one.jpg", "two.jpeg", "three.jpg"]
img = document.getElementById("next")
let i = 0;

img.src = images[i];


function AddSub(){
let pic = document.getElementById("submit").value
images.push(pic);


document.getElementById("submit").value = '';


}

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