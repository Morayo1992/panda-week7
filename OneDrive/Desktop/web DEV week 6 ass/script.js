// ==============================
// Part 1: Event Handling
// ==============================

// Click Event
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("greetMessage").textContent =
    "👋 Hello! Thanks for clicking the button.";
});

// Keyup Event
document.getElementById("liveInput").addEventListener("keyup", function () {
  document.getElementById("liveOutput").textContent =
    "You typed: " + this.value;
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// Light/Dark Mode Toggle
document.getElementById("toggleModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("increaseBtn").addEventListener("click", function () {
  count++;
  document.getElementById("counterValue").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  document.getElementById("counterValue").textContent = count;
});

// Collapsible FAQ
document.getElementById("faqTitle").addEventListener("click", function () {
  let answer = document.getElementById("faqAnswer");
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

// ==============================
// Part 3: Form Validation
// ==============================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  // Clear errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let name = document.getElementById("nameField").value.trim();
  let email = document.getElementById("emailField").value.trim();
  let password = document.getElementById("passwordField").value.trim();
  let valid = true;

  // Validate Name
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  }

  // Validate Email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
  }
});
