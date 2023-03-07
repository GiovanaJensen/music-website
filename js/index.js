const sliders = document.querySelector(".cards");
let scrollPerClick;
let scrollAmount = 0;

scrollPerClick = document.querySelector(".image-album").clientWidth;

function sliderScrollLeft(){
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if(scrollAmount < 0){
        scrollAmount = 0;
    }
}

function sliderScrollRight(){
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        })
    }
}