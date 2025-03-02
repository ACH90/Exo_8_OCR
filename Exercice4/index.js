const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  const container = document.createElement("div");
  container.classList.add("container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  container.appendChild(paragraph);
  document.body.appendChild(container);
});
