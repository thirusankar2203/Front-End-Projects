async function generateQuote() {
  category = document.querySelector('.input').value; 
  const apiKey = 'EyNEVVVkY+4ayHL+vMxL9w==2dMncYbmN9KyEqzx'; // Replace with your API key
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  try {
      const response = await fetch(url, {
          headers: {
              'X-Api-Key': apiKey
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      document.getElementById('quote').innerText = data[0].quote;
      document.getElementById('author').innerText = " - " + data[0].author;
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}