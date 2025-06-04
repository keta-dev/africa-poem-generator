const poemElement = document.querySelector("#poem-form");

poemElement.addEventListener("submit", generatePoem);
function generatePoem(event) {
  event.preventDefault();

  new Typewriter('#poem', {
  strings: [`
  K'anyi gwuọ egun ọnwa <span class="icon">🌚</span><br />
  Egun uro umuaka <span class="icon">🤗</span>`, 'Nnor nu 🥜'],
  autoStart: true,
  delay: 2,
  cursor: "",
});
}