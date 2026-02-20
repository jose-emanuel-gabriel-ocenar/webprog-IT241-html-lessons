
function changeAbout() {
  const about = document.getElementById("aboutText");

  about.innerHTML =
    "I am continuously improving my skills in web development and programming to become a future software developer.";

  about.classList.add("highlight");


  setTimeout(() => {
    about.classList.remove("highlight");
  }, 2000);
}


document.getElementById("year").innerHTML = new Date().getFullYear();