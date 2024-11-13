function searchContent() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const blocks = document.querySelectorAll(".block");

  blocks.forEach((block) => {
    const text = block.innerText.toLowerCase();
    if (text.includes(input)) {
      block.style.display = ""; // Show block
    } else {
      block.style.display = "none"; // Hide block
    }
  });
}
