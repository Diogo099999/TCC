function searchContent() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const profileCards = document.querySelectorAll(".profile-card");

  profileCards.forEach((card) => {
    const name = card.querySelector("h2").innerText.toLowerCase();
    if (name.includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
