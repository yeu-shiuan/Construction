let nav_title = document.querySelectorAll(".nav_top_title");
let nav_right_title = document.querySelectorAll(".nav_right_title");
let nav_title_h2 = document.querySelectorAll(".section_title");
let checked_btn = document.getElementById("menuToggle_input");
nav_title.forEach(function (element, index) {
    element.addEventListener('click', function () {
        window.scrollTo({
            top: nav_title_h2[index].offsetTop -50,
            behavior: "smooth",

        })
    })
});
nav_right_title.forEach(function (element, index) {
    element.addEventListener('click', function () {
        window.scrollTo({
            top: nav_title_h2[index].offsetTop -50,
            behavior: "smooth",

        })
    })
});
// nav_title.forEach(function (element, index1) {
//     element.addEventListener('click', function () {
//         checked_btn.checked = false;
//     })
// });