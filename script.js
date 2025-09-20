// Change Greeting
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("greeting").textContent = "Hello, JavaScript!";
});

// Counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});

// Form Validation
document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  if(name.length < 3) message += "Name must be at least 3 characters. ";
  if(!email.includes("@")) message += "Email must be valid. ";
  if(password.length < 6) message += "Password must be at least 6 characters.";

  document.getElementById("formMessage").textContent = message || "Form submitted successfully!";
});
