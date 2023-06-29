const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector(".form");
  console.log(form.username.value);
  console.log(form.password.value);
});
