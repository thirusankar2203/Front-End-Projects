// Function to fetch trivia questions
async function fetchTriviaQuestions(amount = 10, category = '', difficulty = '', type = 'multiple') {
  let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.response_code === 0) {
      return data.results;
    } else {
      throw new Error('No questions available for the given parameters.');
    }
  } catch (error) {
    console.error('Error fetching trivia questions:', error);
    return [];
  }
}

// Function to display questions
function displayQuestions(questions) {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionTitle = document.createElement('h2');
    questionTitle.innerHTML = `Q${index + 1}: ${question.question}`;
    questionDiv.appendChild(questionTitle);

    const options = [...question.incorrect_answers, question.correct_answer];
    options.sort(() => Math.random() - 0.5); // Shuffle options

    options.forEach((option) => {
      const optionLabel = document.createElement('label');
      optionLabel.innerHTML = `
        <input type="radio" name="question${index}" value="${option}">
        ${option}
      `;
      questionDiv.appendChild(optionLabel);
      questionDiv.appendChild(document.createElement('br'));
    });

    quizContainer.appendChild(questionDiv);
  });

  // Show the submit button
  document.getElementById('submit-btn').style.display = 'block';
}

// Function to evaluate answers
function evaluateAnswers(questions) {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === question.correct_answer) {
      score += 1;
    }
  });

  document.getElementById('submit-btn').style.display = 'none';

  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = ''; // Clear the quiz container

  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `Your score is ${score} out of ${questions.length}.`;
  resultContainer.style.border = '2px solid black';
}

// Fetch and display questions based on user selection
function loadQuiz() {
  const categorySelect = document.querySelector('.category').value;
  const difficultySelect = document.querySelector('.difficulty').value;
  const typeSelect = document.querySelector('.type').value;

  fetchTriviaQuestions(10, categorySelect, difficultySelect, typeSelect).then((questions) => {
    displayQuestions(questions);

    // Add event listener to the submit button
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.onclick = () => evaluateAnswers(questions);
  });
}

// Add event listener to the fetch button
document.getElementById('fetch-btn').addEventListener('click', loadQuiz);
