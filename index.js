// login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form from submitting immediately

    // Collect values
    const firstVal = first.value.trim();
    const lastVal = last.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    // Validation
    if (firstVal.length < 2) {
      alert("⚠️ First name must be at least 2 characters");
      first.focus();
      return;
    }

    if (lastVal.length < 2) {
      alert("⚠️ Last name must be at least 2 characters");
      last.focus();
      return;
    }

    if (!validateEmail(emailVal)) {
      alert("⚠️ Please enter a valid email address");
      email.focus();
      return;
    }

    if (passwordVal.length < 6) {
      alert("⚠️ Password must be at least 6 characters");
      password.focus();
      return;
    }

    // If all checks passed
    alert(`✅ Welcome ${firstVal} ${lastVal}! Login successful.`);
    // Here you can redirect to another page:
    window.location.href = "home.html";
  });

  // Helper function to check email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
