function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessages = [];
  
    // Check if fields are empty
    if (name == "") errorMessages.push("Name is required.");
    if (email == "") errorMessages.push("Email is required.");
    if (message == "") errorMessages.push("Message is required.");
  
    // Email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) errorMessages.push("Please enter a valid email address.");
  
    // Message length validation
    if (message.length < 10) errorMessages.push("Your message must be at least 10 characters long.");
  
    // If there are errors, show them
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return false;
    }

    alert("Form submitted successfully!");
  
    return true; // Form is valid, submit it
}