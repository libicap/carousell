var carousell = {
    images: ["assets/salespic_1.jpg","assets/salespic_2.jpg","assets/salespic_3.jpg","assets/salespic_4.jpg"]
}

var imgNumber = 0;

// var salesImg = document.getElementById("salesImg");
// salesImg.src = carousell.images(imgNumber);

function updateImg (){
    var salesImg = document.getElementById("salesImg");
    salesImg.src = carousell.images[imgNumber];
}

function clickRight (){
    
    imgNumber = imgNumber + 1;
    
    if (imgNumber > carousell.images.length-1){
        imgNumber = 0;
    }

    updateImg();

}

function clickLeft (){

    imgNumber = imgNumber -1;

    if (imgNumber < 0){
        imgNumber = carousell.images.length-1;
    }

    updateImg();

}