const playForm = document.getElementById("play-form");

const USER_NUMBER_KEY = "user_number";
const MACHINE_NUMBER_KEY = "machine_number";

function choiceRandomMachineNum() {
  const machineChose = document.getElementById("machine-chose");
  const maxRange = playForm.querySelector("#max-range");

  const numberRange = maxRange.valueAsNumber;
  const randomMachineNumber = Math.round(Math.random() * numberRange);
  localStorage.setItem(MACHINE_NUMBER_KEY, randomMachineNumber);
  machineChose.innerText = randomMachineNumber;
}

function ShowResult(winOrLose) {
  const resultDiv = document.querySelector("div");
  const result = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  result.innerText = `You ${winOrLose}!`;
}

function startGame(event) {
  event.preventDefault();
  const guessNumber = playForm.querySelector("#guess-number");
  const userChose = document.getElementById("user-chose");

  const guessUserNumber = guessNumber.valueAsNumber;

  localStorage.setItem(USER_NUMBER_KEY, guessUserNumber);
  userChose.innerText = guessUserNumber;

  choiceRandomMachineNum();

  const machineNumber = localStorage.getItem(MACHINE_NUMBER_KEY);
  const userNumber = localStorage.getItem(USER_NUMBER_KEY);

  if (userNumber === machineNumber) {
    ShowResult("won");
  } else {
    ShowResult("lost");
  }
}

playForm.addEventListener("submit", startGame);
