document.getElementById('slider_btn').onclick = sliderLeft;

var left = 0;

function sliderLeft(){
    var lineOfSlide = document.getElementById('slider_participants');
    left = left - 216;
    if(left < - 980){
        left = 0;
    }
    lineOfSlide.style.left = left +'px';
}


