const loginfunction = async (e) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  await fetch("https://bookmark-backend-let9.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      if (result.message === "User does not exist") {
        document.getElementById("errormsg1").innerHTML = result.message;
        document.getElementById("errormsg1").style.display = "block";
      } else if (result.message === "Password is not correct") {
        document.getElementById("errormsg1").innerHTML = result.message;
        document.getElementById("errormsg1").style.display = "block";
      } else {
        window.location.href = `/index.html?user=${result}`;
      }
    })
    .catch((error) => {
      console.log(error);
      // document.getElementById("errormsg3").innerHTML = error.message;
      // document.getElementById("errormsg3").style.display = "block";
      document.getElementById("errormsg1").innerHTML =
        "An error occured, please try again";
      document.getElementById("errormsg1").style.display = "block";
    });
};
