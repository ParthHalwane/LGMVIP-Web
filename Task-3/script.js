document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const imageLink = document.getElementById("image-link").value;
  const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
  const skillsInputs = document.querySelectorAll('input[name="skills"]:checked');

  // Create student card
  const studentCard = document.createElement("div");
  studentCard.className = "card";
  studentCard.innerHTML = `
    <img src="${imageLink}" alt="Student Image">
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Website:</strong> ${website}</p>
    <p><strong>Gender:</strong> ${genderInputs.length > 0 ? genderInputs[0].value : ""}</p>
    <p><strong>Skills:</strong> ${Array.from(skillsInputs).map(input => input.value).join(", ")}</p>
  `;

  // Append student card to the container
  document.getElementById("student-cards").appendChild(studentCard);

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("image-link").value = "";
  genderInputs.forEach(input => (input.checked = false));
  skillsInputs.forEach(input => (input.checked = false));
});
