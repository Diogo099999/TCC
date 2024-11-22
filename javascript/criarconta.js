document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmar-senha").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match! Please, try again.");
    } else {
      window.location.href = "/index.html";
    }
  });
