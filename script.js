const submitEmailBtn = document.querySelector(".button");
const notifyContainer = document.querySelector(".formular");
const mobile = window.matchMedia("(max-width: 375px)");

const submitEmail = submitEmailBtn.addEventListener("click", function (e) {
  const inputEmail = document.querySelector(".input");
  const error = document.querySelector(".error");

  e.preventDefault();

  if (inputEmail.value === "") {
    error.textContent = "Whoops! It looks like you forgot to add your email";
  }

  if (!inputEmail.value.includes("@") && inputEmail.value.length >= 1) {
    error.textContent = "Please provide a valid email address";
  }

  if (
    !inputEmail.value === "" ||
    (inputEmail.value.includes("@") && inputEmail.value.length >= 1)
  ) {
    notifyContainer.submit();
  }

  // Mobile
  if (mobile.matches) {
    error.classList.add("error-mobile");
    notifyContainer.classList.add("mb");
  }

  inputEmail.focus();
});