const form = document.getElementById("form");
const user = document.getElementById("user");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("cell-phone");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("passwordRepeat");

function validarUser() {
  const userOk = /^[a-zA-Z0-9_]{4,16}$/.test(user.value);
  user.classList.remove("is-invalid");
  user.classList.add(userOk ? "is-valid" : "is-invalid");
}

function validarEmail() {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  email.classList.remove("is-invalid");
  email.classList.add(emailOk ? "is-valid" : "is-invalid");
}

function validarPhone() {
  const phoneOk = /^9\d{8}$/.test(phone.value);
  phone.classList.remove("is-invalid");
  phone.classList.add(phoneOk ? "is-valid" : "is-invalid");
}

function validarPassword() {
  const passwordOk =
    password.value !== "" && password.value === passwordRepeat.value;
  passwordRepeat.classList.remove("is-invalid");
  passwordRepeat.classList.add(passwordOk ? "is-valid" : "is-invalid");
}

function validar(e) {
  e.preventDefault();

  validarUser();

  validarEmail();

  validarPhone();

  validarPassword();
}

user.addEventListener("input", validarUser);
email.addEventListener("input", validarEmail);
phone.addEventListener("input", validarPhone);
passwordRepeat.addEventListener("input", validarPassword);

form.addEventListener("submit", validar);