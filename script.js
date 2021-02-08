
var i = 0; //start point
var images = [];
var time = 4000;

//image list

images[0] = "image 1.jpg";
images[1] = "image 2.jpg";
images[2] = "image 3.jpg";

// change image
function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

     setTimeout("changeImg()", time);
}

    window.onload = changeImg;
