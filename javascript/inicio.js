function searchContent() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const blocks = document.getElementsByClassName("block");

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const name = block.getAttribute("data-name");

    if (name.includes(input)) {
      block.style.display = "";
    } else {
      block.style.display = "none";
    }
  }
}
