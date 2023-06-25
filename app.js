document.addEventListener("click", (e) => {
    let dropdown = document.querySelector('.footer');
    let plus = document.querySelector(".plus");
    let mainSide = document.querySelector(".main-side");

    let targetElement = e.target;

    let isClickInsideFooterDropdown = dropdown.contains(targetElement);
    let isClickInsidePlusDropdown = plus.contains(targetElement);
    let isClickInsideSidebarDropdown = mainSide.contains(targetElement);


    if (!isClickInsideFooterDropdown) {
        helpDropdown.classList.add("hide");
    }
    if (!isClickInsidePlusDropdown) {
        plusDropdown.classList.add("hide");
    }
    if (!isClickInsideSidebarDropdown) {
        sidebar.classList.add("hide");
    }
});


let helpButton = document.getElementById("help-button");
let helpDropdown = document.getElementById("help");

helpButton.addEventListener("click", () => {
    helpDropdown.classList.toggle("hide");
})

let plusIcon = document.getElementById("plus-icon");
let plusDropdown = document.getElementById("add-icon-menu");
plusIcon.addEventListener("click", () => {
    plusDropdown.classList.toggle("hide");
})

let hamburgerIcon = document.getElementById("hamburger");
let sidebar = document.getElementById("sidebar");
hamburgerIcon.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
})