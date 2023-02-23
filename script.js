const saveButton = document.getElementById("save");
const resetButton = document.getElementById("reset");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const cgpaField = document.getElementById("cgpa");
const phoneField = document.getElementById("phone");
const yearField = document.getElementById("year");
const durationField = document.getElementById("duration");

resetButton.addEventListener("click", () => {
  const forms = document.getElementsByTagName("form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].reset();
  }
});

saveButton.addEventListener("click", () => {
  let valid = true;

  const forms = document.getElementsByTagName("form");
  for (let i = 0; i < forms.length; i++) {
    const form = forms[i];
    const inputs = form.getElementsByTagName("input");
    for (let j = 0; j < inputs.length; j++) {
      const input = inputs[j];
      if (input.value === "") {
        valid = false;
      }
    }
  }

  if (valid) {
    alert("Resume saved!");
    window.location.href = "data-saved.html"; // Redirect to a new webpage
    for (let i = 0; i < forms.length; i++) {
      forms[i].reset(); // Reset all the fields
    }
  } else {
    alert("All fields must be filled!");
  }
});

nameField.addEventListener("change", function () {
  const nameValue = nameField.value;
  if (/\d/.test(nameValue)) {
    alert("Name field can not contain any number!");
    nameField.value = "";
  }
});

emailField.addEventListener("change", function () {
  const emailValue = emailField.value;
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
    alert("Please enter a valid email address!");
    emailField.value = "";
  }
});

cgpaField.addEventListener("change", function () {
  const cgpaValue = cgpaField.value;

  if (cgpaValue > 4) {
    alert("CGPA can not be greater than 4!");
    cgpaField.value = "";
  } else if (cgpaValue < 1) {
    alert("CGPA can not be less than 1!");
    cgpaField.value = "";
  } else {
  }
});

phoneField.addEventListener("change", function () {
  const phoneValue = phoneField.value;
  if (!/^\+(?:[0-9()\s-] ?){6,14}[0-9]$/.test(phoneValue)) {
    alert("Use correct phone number format with country code!");
    phoneField.value = "";
  }
});

yearField.addEventListener("change", function () {
  const yearValue = yearField.value;

  if (!/^\d*$/.test(yearValue)) {
    alert("Year can only contain numbers!");
    yearField.value = "";
  }
});

durationField.addEventListener("change", function () {
  const durationValue = durationField.value;

  if (!/^\d*$/.test(durationValue)) {
    alert("Duration can only contain numbers!");
    durationField.value = "";
  }
});

if (document.referrer !== "https://srijonashraf.github.io/Resume-Builder/") {
  location.href = "https://srijonashraf.github.io/Resume-Builder/data-saved";
}
