export async function fetchData() {
    const API_URL = `${process.env.API_URL}`;
    const API_KEY = process.env.API_KEY; 
  
    const requestBody = {
      dotNumbers: [
        3662747, 2232830, 4038903, 4275010, 1321219, 2872963, 4270867, 2076262,
        559727, 3857959, 2210698, 2919760, 2413875, 50805, 3152856, 2108957,
        4292167, 2146209, 2064610, 3424162,
      ],
    };
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`, // Use API_KEY from .env.local
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      return await response.json(); // Parse JSON response
    } catch (error) {
      console.error("Error fetching carrier data:", error);
      throw error;
    }
  }
  