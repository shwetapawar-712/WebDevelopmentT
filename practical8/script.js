function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const feedbackElement = document.getElementById(`${fieldId}Feedback`);

  if (field.value.trim() === "") {
    feedbackElement.textContent = `Please fill in your ${fieldId}.`;
  } else {
    feedbackElement.textContent = `Thank you! Your ${fieldId} looks good.`;
  }
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formFeedback = document.getElementById("formFeedback");

  if (name && email && message) {
    formFeedback.classList.remove("hidden");
    formFeedback.textContent = "Thank you for contacting us! We will get back to you shortly.";
  } else {
    formFeedback.classList.remove("hidden");
    formFeedback.textContent = "Kindly complete all required fields before submitting.";
  }
}
