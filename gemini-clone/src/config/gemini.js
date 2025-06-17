import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBU-XXAvGLZIg8TjA5EcuiOljOG5Vv_XIQ" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  // Adjust this line based on the actual response structure
  // console.log(response.candidates?.[0]?.content?.parts?.[0]?.text || "No response text found.");
  return response.candidates?.[0]?.content?.parts?.[0]?.text || "No response text found."
}

export default main;
