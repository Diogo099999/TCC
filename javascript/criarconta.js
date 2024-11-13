document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });
document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmar-senha").value;

    if (password !== confirmPassword) {
      event.preventDefault();
      alert("Passwords do not match! Please, try again.");
    }
  });
