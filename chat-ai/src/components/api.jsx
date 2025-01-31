const fetchCatResponse = async (userMessage) => {
    try {
      const API_URL = "https://api.openai.com/v1/completions";
      const API_KEY = "dc881367f8db6e8007df3ca7a79ad6836fa7d25dbd420727bc402bedd01eb477"; 
  
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: userMessage,
          max_tokens: 150,
          temperature: 0.7,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch response: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.choices[0].text.trim();
    } catch (error) {
      console.error("Error fetching cat response:", error);
      throw error;
    }
  };
  
  export { fetchCatResponse };