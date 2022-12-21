const signupfunction = async (e) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  await fetch("https://bookmark-backend-let9.onrender.com/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      if (result.message === "User already exist") {
        document.getElementById("errormsg2").innerHTML = error.message;
        document.getElementById("errormsg2").style.display = "block";
      } else {
        window.location.href = `/index.html?user=${result.username}`;
      }
    })
    .catch((error) => {
      // console.log(error);
      document.getElementById("errormsg2").innerHTML =
        "An error occured, please try again";
      document.getElementById("errormsg2").style.display = "block";
    });
};
