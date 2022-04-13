const product = document.querySelectorAll('.section_all');
const aside = document.querySelectorAll('.nav_right_bg_1');
// console.log('aside');

document.addEventListener('scroll', function () {
    console.log(document.documentElement.scrollTop);
    product.forEach(function (el, index) {
        console.log(el.offsetTop);
        if (Math.abs(el.offsetTop - document.documentElement.scrollTop)< 60) {
            aside.forEach(function (el, index) {
                el.style = "border: 0px solid black";
            });
            aside[index].style = "display:block";
            // console.log(aside);
        }
    })
})