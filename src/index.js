function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "07678d78bd5438a79f8d4tc414d2o39e";
  let context = "You are an African folktale Poem expert and love to write short poems. You mission is to generate a 5 line poem written in the local dialect in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instructions: Generate African poems about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating Africa poems about ${instructionsInput.value}</div>`;


  axios.get(apiUrl).then(showPoem);
}

const poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", generatePoem);