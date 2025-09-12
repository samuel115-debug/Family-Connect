// Get form and inputs
const form = document.querySelector("form");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Run when form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const first = firstInput.value.trim();
  const last = lastInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!first || !last || !email || !password) {
    alert("⚠️ All fields are required!");
    return;
  }

  // Get stored users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    // Login check
    if (existingUser.password === password) {
      alert(`✅ Welcome back, ${existingUser.first}!`);
      window.location.href = "home.html"; // redirect after login
    } else {
      alert("❌ Incorrect password!");
    }
  } else {
    // New signup → save user
    const newUser = { first, last, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("🎉 Account created successfully! You can now log in.");
  }

  // Clear form
  form.reset();
});
