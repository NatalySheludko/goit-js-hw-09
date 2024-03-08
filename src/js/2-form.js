const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("submit", formSubmitHandler);

const feedbackInput = feedbackForm.querySelector("input");
const feedbackMsg = feedbackForm.querySelector("textarea");

function formSubmitHandler(event) {
  event.preventDefault();

  const emailData = feedbackInput.value.trim();
  const txtData = feedbackMsg.value.trim();

  if (emailData === "" || txtData === "") return;

  const data = JSON.stringify({ emailData, txtData });

  localStorage.setItem(STORAGE_KEY, data);

  event.currentTarget.reset();
}

const storageData = localStorage.getItem(STORAGE_KEY);
const data = JSON.parse(storageData);

feedbackInput.value = data.emailData;
feedbackMsg.value = data.txtData;

console.log(data);
