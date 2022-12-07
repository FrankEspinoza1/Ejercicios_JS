const form = document.getElementById("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

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

function validar(e) {
  e.preventDefault();

  validarEmail();

  validarPhone();
}

email.addEventListener("input", validarEmail);
phone.addEventListener("input", validarPhone);

form.addEventListener("submit", validar);