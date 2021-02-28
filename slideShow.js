
var i = 0; //start point //
var images = [];
var time = 3000; 

// image list //

images[0] = "images/homepage/u7.jpg";
images[1] = "images/homepage/u5.jpg";
images[2] = "images/homepage/u6.jpg";


// change image //
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

    
