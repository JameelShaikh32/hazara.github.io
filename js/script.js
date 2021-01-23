/* Dark Mode */
function dark() {
    const div = document.querySelector(".dark-theme");

    div.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        document.getElementsByTagName("I")[0].classList.toggle("fa-sun");
    });

}

/* View More Button */
var a;

function hist() {

    if (a == 1) {
        document.getElementById("history").style.display = "inline";
        document.getElementById("details").style.display = "none";
        return a = 0;
    } else {
        document.getElementById("history").style.display = "none";
        document.getElementById("details").style.display = "inline";
        return a = 1;
    }
}