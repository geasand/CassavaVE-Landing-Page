// Getting the Go to Up button:
let scrollBtn = document.getElementById("goUp")

// Scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*Show/Hide sections function
function clickOnMain() {
    document.getElementById("product").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
}

function clickOnAbout() {
    document.getElementById("about").style.display = "block";
    document.getElementById("product").style.display = "none";
    document.getElementById("services").style.display = "none";
}

function clickOnProducts() {
    document.getElementById("product").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
} */

// Navigate between menu links (Show/Hide sections function)
var x = document.getElementById("product");
var y = document.getElementById("about");
var z = document.getElementById("services");

function showProducts() {
    if (!x.classList.contains("show")) {
            x.classList.add("show");
            y.classList.remove("show");
            z.classList.remove("show");
        } else {
            x.classList.add("show");
            y.classList.remove("show");
            z.classList.remove("show");
        }
    }

function showAbout() {
    if (!y.classList.contains("show")) {
            y.style.removeProperty('display');
            y.style.display="block";
            y.classList.add("show");
            x.classList.remove("show");
            x.style.display="none";
            z.classList.remove("show");
        } else {
            y.classList.add("show");
            x.classList.remove("show");
            z.classList.remove("show");
        }
    }