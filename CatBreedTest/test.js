class Question {
  constructor(title, answers) {
    this.title = title;
    this.answers = answers;
  }
}

class Breed {
  constructor(name, characteristics) {
    this.name = name;
    this.characteristics = characteristics;
  }
}

class BreedHTMLElement extends Breed {
  constructor(percent, breed) {
    super(breed.name, breed.characteristics);
    this.percent = percent;
  }

  get image() {
    return `images/${this.name.toLowerCase()}.jpg`;
  }

  toString() {
    return `<li>
    <h1>${this.name}</h1>
    <p>${this.characteristics}</p>
    <img src='${this.image}'/>
    <p>${this.percent.toFixed(1)}%</p>
    </li>`;
  }
}

const questions = [
  new Question("What type of fur do you prefer?", [
    "Fluffy",
    "Smooth",
    "No fur",
  ]),
  new Question("What behavior would you like your kitty to have?", [
    "Playful and active",
    "Chill and affectionate",
    "Independent but loving",
  ]),
  new Question("What fur coloring do you prefer?", [
    "One plain color",
    "Bright stripes",
    "Unique",
  ]),
  new Question("How many cats would you like to have?", [
    "One is enough",
    "2 or 3 will do",
    "As many as my house can hold",
  ]),
  new Question(
    "How much time can you dedicate to taking good care of your cat's needs?",
    [
      "I can change the litter and give food",
      "I could do additional hygiene care",
      "All day",
    ]
  ),
];

const breeds = [
  new Breed("Sphynx", [
    "No fur",
    "Independent but loving",
    "One plain color",
    "One is enough",
    "All day",
  ]),
  new Breed("Bengal", [
    "Smooth",
    "Playful and active",
    "Unique",
    "2 or 3 will do",
    "I can change the litter and give food",
  ]),
  new Breed("Birman", [
    "Fluffy",
    "Independent but loving",
    "Unique",
    "2 or 3 will do",
    "I could do additional hygiene care",
  ]),
  new Breed("Ragdoll", [
    "Fluffy",
    "Chill and affectionate",
    "Unique",
    "One is enough",
    "I could do additional hygiene care",
  ]),
  new Breed("Siamese", [
    "Smooth",
    "Playful and active",
    "Unique",
    "As many as my house can hold",
    "I can change the litter and give food",
  ]),
];

const questionsList = document.getElementById("list");
questions.forEach((question, questionIndex) => {
  let questionHtml = `
    <li>${question.title}</li>
  `;

  question.answers.forEach((answer) => {
    questionHtml += `
      <input type="radio" name="answer_${questionIndex}" value="${answer}">
      <label>${answer}</label><br>
    `;
  });

  questionsList.innerHTML += questionHtml;
});
const form = document.getElementById("questions-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const plainObject = Object.fromEntries(data);
  console.log(plainObject);

  const userAnswers = Object.values(plainObject);

  let totalMatches = 0;
  let breedMacthes = {};
  for (const breed of breeds) {
    let i = 1;
    for (const characteristic of breed.characteristics) {
      if (userAnswers.indexOf(characteristic) !== -1) {
        console.log(`Match for - ${breed.name}`);
        breedMacthes[breed.name] = i;
        i++;
        totalMatches++;
      }
    }
  }

  let listOfBreeds = document.querySelector("#breeds");
  const breedHTMLElements = [];

  for (const breedName in breedMacthes) {
    const percent = (100 * breedMacthes[breedName]) / totalMatches;
    const breed = breeds.find((breed) => breed.name === breedName);

    breedHTMLElements.push(new BreedHTMLElement(percent, breed));
  }

  listOfBreeds.innerHTML = breedHTMLElements
    .sort((a, b) => b.percent - a.percent)
    .join("\n");
});
