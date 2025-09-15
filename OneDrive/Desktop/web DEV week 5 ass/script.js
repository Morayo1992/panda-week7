// ==========================
// Part 1: JavaScript Basics
// ==========================
function checkVotingEligibility() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "✅ You are eligible to vote!";
  } else if (age > 0) {
    result = "❌ You are not eligible to vote yet.";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
}

// ==========================
// Part 2: Functions
// ==========================

// Custom function to calculate totals
function calculateTotal(num1, num2) {
  return num1 + num2;
}

// Function to display result on the page
function showTotal(a, b) {
  let total = calculateTotal(a, b);
  document.getElementById("totalResult").textContent =
    `The total is: ${total}`;
}

// ==========================
// Part 3: Loops
// ==========================

// Example 1: Countdown using a for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous results

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Loop through an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("🍎 Fruits List:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// 1. Toggle background color
document.getElementById("colorToggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// 2. Add new list item
document.getElementById("addItemBtn").addEventListener("click", function () {
  let ul = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
});

// 3. Change text dynamically
document.getElementById("userMessage").addEventListener("mouseover", function () {
  this.textContent = "👋 Hover detected! Enter your age below.";
});
