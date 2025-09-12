// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Grab elements
  const loginBtn = document.querySelector(".Login");
  const createBtn = document.querySelector(".create");
  const functions = document.querySelectorAll(".function");

  // Example: Alert when clicking "Create family space"
  if (createBtn) {
    createBtn.addEventListener("click", () => {
      alert("🚀 Feature coming soon: Create your family space!");
    });
  }

  // Example: Confirm before leaving page via Login
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      const goAhead = confirm("Do you want to continue to Login?");
      if (!goAhead) {
        e.preventDefault(); // stop navigation
      }
    });
  }

  // Add hover effect with JS (extra visual feedback)
  functions.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });

  // Example: dynamic greeting based on time
  const introDes = document.querySelector(".intro-des");
  if (introDes) {
    const greeting = document.createElement("p");
    greeting.style.fontStyle = "italic";
    greeting.style.marginTop = "20px";

    const hour = new Date().getHours();
    if (hour < 12) greeting.textContent = "🌞 Good morning, Family!";
    else if (hour < 18) greeting.textContent = "🌤️ Good afternoon, Family!";
    else greeting.textContent = "🌙 Good evening, Family!";

    introDes.appendChild(greeting);
  }
});
