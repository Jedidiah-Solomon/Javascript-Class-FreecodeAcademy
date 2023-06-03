// Sign Up
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userData = {
    username: username,
    email: email,
    password: password
  };

  // Store user data in localStorage
  localStorage.setItem("userData", JSON.stringify(userData));

  // Clear input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  alert("Sign up successful. Please sign in.");
  // Redirect to signIn.html
  window.location.href = "signIn.html";
});

// Sign In
document.getElementById("signin-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve user data from localStorage
  const storedUserData = localStorage.getItem("userData");
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.username === username && userData.password === password) {
      alert("Authentication successful. Redirecting to homepage...");
      // Clear input fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      // Redirect to index.html
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  } else {
    alert("No user data found. Please sign up first.");
  }
});
