// Change About Me text
function changeAbout() {
  document.getElementById("aboutText").innerHTML =
    "I am continuously improving my skills in web development and programming to become a future software developer.";
}

// Automatically display current year in footer
document.getElementById("year").innerHTML = new Date().getFullYear();