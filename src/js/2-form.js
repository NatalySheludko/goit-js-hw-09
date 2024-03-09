const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");
const feedbackInput = feedbackForm.querySelector("input");
const feedbackMsg = feedbackForm.querySelector("textarea");

feedbackForm.addEventListener("input", fullLocalStorage);

function fullLocalStorage() {
  const data = {
    emailData: feedbackInput.value.trim(),
    txtData: feedbackMsg.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

feedbackForm.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const emailData = feedbackInput.value.trim();
  const txtData = feedbackMsg.value.trim();

  if (emailData === "" || txtData === "") {
    alert("Please fill in both fields before submitting.");
    return;
  }
  console.log({ emailData, txtData });

  localStorage.removeItem(STORAGE_KEY);
  feedbackForm.reset();
}

document.addEventListener("DOMContentLoaded", getFormData);

function getFormData() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  if (storageData) {
    const data = JSON.parse(storageData);
    feedbackInput.value = data.emailData;
    feedbackMsg.value = data.txtData;
  }
}
