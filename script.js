// Function to display a thank you message and handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form elements
    const form = document.getElementById("survey-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const genderSelect = document.getElementById("gender");
    const frequencyRadio = document.querySelector('input[name="frequency"]:checked');
    const featuresCheckboxes = document.querySelectorAll('input[name="features"]:checked');
    const commentsTextarea = document.getElementById("comments");

    // Validate the form
    if (!nameInput.value || !emailInput.value || !ageInput.value || !genderSelect.value || !frequencyRadio || featuresCheckboxes.length === 0) {
        alert("Please fill out all required fields.");
        return;
    }

    // Construct the form data
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        age: ageInput.value,
        gender: genderSelect.value,
        frequency: frequencyRadio.value,
        features: Array.from(featuresCheckboxes).map(checkbox => checkbox.value),
        comments: commentsTextarea.value
    };

    // You can now send this formData to your server or perform any desired actions

    // Hide the form and show the thank you message
    form.style.display = "none";
    document.getElementById("thank-you-message").style.display = "block";
}

// Attach the submitForm function to the form's submit event
document.getElementById("survey-form").addEventListener("submit", submitForm);