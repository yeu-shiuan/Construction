const product = document.querySelectorAll('.section_all');
const aside = document.querySelectorAll('.nav_right_bg_1');
const nav_right_img = document.querySelectorAll('.nav_right_img');
const svg = document.querySelectorAll('.svg_fill');

document.addEventListener('scroll', function () {
    // console.log(document.documentElement.scrollTop);  // 距離top的高度
    product.forEach(function (el, index) {
        console.log(el.offsetTop);  // section 距離top的高度
        if (Math.abs(el.offsetTop - document.documentElement.scrollTop) < 60 ) {
            aside.forEach(function (el, index) {
                el.style = "border: 0px solid black";
            });
            aside[index].style = "display:block";
                        svg.forEach(function (el, index) {
                el.style = "";
            });
            svg[index].style = "fill: #016437";
            svg[index + 5].style = "fill: #016437";
            nav_right_img.forEach(function (el, index) {
                el.style = "";
            });
            nav_right_img[index].style = "background-color: #ffd02b";
            nav_right_img[index + 5].style = "background-color: #ffd02b";
        };
    });
});

// const product = document.querySelectorAll('.section_all');
// const aside = document.querySelectorAll('.nav_right_bg_1');
// console.log(product);
// document.addEventListener('scroll', function () {
//     product.forEach(function (el, index) {
//         const height = el.offsetTop + (el.clientHeight/2)
//         if (Math.abs(height - document.documentElement.scrollTop)< 50) {
//             aside.forEach(function (el, index) {
//                 el.style = "border: 0px solid black";
//             });
//             aside[index].style = "display:block";
//         }
//     })
// });