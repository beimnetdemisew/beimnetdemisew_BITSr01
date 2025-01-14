// Submit Button audio effect
let audioSuccess = document.querySelector("#audioSuccess");
let audioError = document.querySelector("#audioError");
let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submitBtn = document.querySelector("#submit-btn");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
submitBtn.addEventListener("click", function () {
  let nameValue = name.value;
  let emailValue = email.value;
  let messageValue = message.value;
  if (nameValue == "" || emailValue == "" || messageValue == "") {
    audioError.play();
  } else if (!emailValue.match(mailFormat)) {
    audioError.play();
  }
});

form.addEventListener("submit", function () {
  audioSuccess.play();
});


// Scroll Sticky nav
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Nav active
var header = document.querySelector(".nav-links");
var links = header.querySelectorAll(".nav-link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// mobile nav bar
const nav = document.querySelector("#nav-links");
const menu = document.querySelector(".menu");
const menuFont = document.querySelector("#menuFont");

menu.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", "true");
    nav.setAttribute("aria-expanded", "true");
    menuFont.classList.add("icon-xmark");
  } else if (visibility === "true") {
    nav.setAttribute("aria-expanded", "false");
    nav.setAttribute("data-visible", "false");
    menuFont.classList.remove("icon-xmark");
  }
});

// Scroll Behaviour:
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;
let scrollToBottomBtn = document.querySelector(".scroll-down-button");

// onScroll callback function:
function handleScroll() {
  
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal > 0.95) {
    // Hide scrollToBottomBtn, unhide scrollToTopBtn
    scrollToTopBtn.style["display"] = 'inline-block';
    scrollToBottomBtn.style["display"] = 'none';
  } else {
    // Hide scrollToTopBtn, unhide scrollToBottomBtn
    scrollToTopBtn.style["display"] = 'none';
    scrollToBottomBtn.style["display"] = 'flex';
  }

}

scrollToBottomBtn.addEventListener("click", () => window.scrollTo(0,document.querySelector('html').offsetHeight));
scrollToTopBtn.addEventListener("click", () => window.scrollTo(0,0));
document.addEventListener("scroll", handleScroll);
