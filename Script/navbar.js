const expandBtn = document.getElementById("hamburger-icon");
const collapseBtn = document.getElementById("up-icon");
const navbar = document.getElementById("nav");
const leftSection = document.getElementById("left-section-js");
const rightSection = document.getElementById("right-section-js");

function expand(){
    navbar.className = "expanded"
    leftSection.className = "left-section left-section-expanded"
    rightSection.className = "right-section right-section-expanded"
}

function collapse(){
    navbar.className = "collapsed"
    leftSection.className = "left-section left-section-collapsed"
    rightSection.className = "right-section right-section-collapsed"
}

expandBtn.addEventListener("click", expand)
collapseBtn.addEventListener("click", collapse)