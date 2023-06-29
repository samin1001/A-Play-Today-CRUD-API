const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.querySelector(".form");
  const username = form.username.value;
  const password = form.password.value;
  try {
    console.log("sending data");
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        pass_word: password,
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      alert("Register succesfully");
    }
  } catch (error) {
    console.log(error);
  }
});
