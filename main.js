const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);

sliderItems.forEach(function(slide, index) {
    console.log(slide);

    if (index !==0) {
        slide.classList.add("hidden")
    }

    

});