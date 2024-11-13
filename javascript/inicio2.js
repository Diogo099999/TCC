function showLoginMessage() {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.style.display = "block"; // Exibe a mensagem

  // Oculta a mensagem após 3 segundos
  setTimeout(() => {
    alertMessage.style.display = "none";
  }, 3000);
}

function requireLogin(redirectUrl) {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Verifica o estado de login
  if (isLoggedIn !== "true") {
    showLoginMessage(); // Exibe a mensagem de que o login é necessário
  } else {
    window.location.href = redirectUrl; // Redireciona se estiver logado
  }
}
