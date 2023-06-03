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

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "./storeUser.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      alert("Sign up successful. Please sign in.");
      // Clear input fields
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      // Redirect to signIn.html
      window.location.href = "signIn.html";
    }
  };
  xhr.send(JSON.stringify(userData));
});


// Sign In
document.getElementById("signIn-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "./retrieveUser.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.username === username && response.password === password) {
        alert("Authentication successful. Redirecting to homepage...");
        // Clear input fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        // Redirect to index.html
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
  };
  xhr.send("username=" + encodeURIComponent(username));
});
