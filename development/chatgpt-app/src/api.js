
const apiKey = 'dc881367f8db6e8007df3ca7a70ad6836fa7d25dbd420727bc402bedd01eb477';

const apiUrl = 'https://api.openai.com/v1/completions';

/
const requestBody = {
  model: "text-davinci-003", // You can choose the model you need
  prompt: "Hello, how are you today?", // The text prompt you want the model to complete
  max_tokens: 50, // Max tokens (number of words/parts of words) in the response
};

// Make the API request using fetch
async function fetchCompletion() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`, // Use the API key for authorization
      },
      body: JSON.stringify(requestBody), // Convert request body to JSON format
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Output the result (the generated text)
    console.log('Generated Text:', data.choices[0].text.trim());
  } catch (error) {
    console.error('Error fetching completion:', error);
  }
}

// Call the function to make the request
fetchCompletion();
