// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value; // Get the selected answer

    const feedbackElement = document.getElementById('feedback'); // Feedback element

    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
