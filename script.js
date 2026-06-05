const title = document.querySelector("#app-title");
const greenButton = document.querySelector("#green-button");
const orangeButton = document.querySelector("#orange-button");
const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-input");
const greetingOutput = document.querySelector("#greeting-output");

greenButton.addEventListener("click", () => {
  title.style.color = "#1f8a4c";
});

orangeButton.addEventListener("click", () => {
  title.style.color = "#d66a16";
});

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim() || "гость";

  // Учебная уязвимость: пользовательский ввод намеренно вставляется как HTML.
  greetingOutput.innerHTML = `Hello World, ${name}!`;
});
