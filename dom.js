const form = document.querySelector(".form-bloc");
const email = document.querySelector(".form-item");
const button = document.querySelector("button");
const errorMessage = document.querySelector(".message");

button.addEventListener("click", function (e) {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get the value from the input
  const emailValue = email.value;
  if (emailValue === "") {
    setError(); // show message error and add error class
  } else if (!isEmail(emailValue)) {
    setError();
  } else {
    setSuccess();
  }
}

function setError() {
  email.classList.add("error");
  errorMessage.classList.add("error");
}

function setSuccess() {
  email.classList.remove("error");
  errorMessage.classList.remove("error");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
