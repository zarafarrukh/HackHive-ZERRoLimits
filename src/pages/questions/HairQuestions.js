import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/HairQuestions.css";

const HairQuestions = () => {
    const navigate = useNavigate(); // Initialize navigate hook
    const [answers, setAnswers] = useState({
      hairLength: "",
      hairType: "",
      hairConcerns: "",
      washingFrequency: "",
      scalpType: "",
      routine: "",
      styling: "",
      goals: "",
      favoriteProduct: "",
    });
  
    const [response, setResponse] = useState("");
    
    const apiKey = process.env.REACT_APP_api_key;
    const modelUrl = process.env.REACT_APP_url;

    console.log("API Key:", apiKey); // Should display the API key
    console.log("Model URL:", modelUrl); // Should display the API endpoint
    // Function to handle button selections
    const handleSelect = (question, value) => {
      setAnswers((prev) => ({ ...prev, [question]: value }));
    };
  
    // Generate structured prompt
    const generatePrompt = () => {
      return `I am looking for hair care advice. 
      My hair length is: ${answers.hairLength}. 
      My hair type is: ${answers.hairType}. 
      My main hair concerns are: ${answers.hairConcerns}. 
      I wash my hair ${answers.washingFrequency} times a week. 
      My scalp type is: ${answers.scalpType}.
      My hair care routine is: ${answers.routine}. 
      My usual styling methods include: ${answers.styling}. 
      My hair goals are: ${answers.goals}. 
      My favorite type of hair product is: ${answers.favoriteProduct}. 
      Please provide me with personalized recommendations based on this information.
      keep the response short but informational, as well as make sure it's in bullet point form.
      
      .`;
    };
  
    // Send prompt to OpenAI
    const handleGenerate = async () => {
      const prompt = generatePrompt();
      
      try {
        const result = await fetch(modelUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 200,
          }),
        });
  
        const data = await result.json();
  
        if (data.error) {
          setResponse("Error with API request, please try again.");
        } else {
          setResponse(data.choices[0].message.content || "No response generated.");
        }
      } catch (error) {
        console.error("Error:", error);
        setResponse("Error generating response.");
      }
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hair Care Questions</h1>
        
        {/* Hair Length */}
        <div className="mb-4">
          <label className="block font-bold mb-2">What is your hair length?</label>
          <div className="flex gap-2">
            {["Long", "Medium", "Short"].map((length) => (
              <button key={length} className={`p-2 border rounded ${answers.hairLength === length ? "selected" : ""}`} 
                onClick={() => handleSelect("hairLength", length)}>{length}</button>
            ))}
          </div>
        </div>
  
        {/* Hair Type */}
        <div className="mb-4">
          <label className="block font-bold mb-2">What is your hair type?</label>
          <div className="flex gap-2">
            {["Straight", "Wavy", "Curly", "Coily"].map((type) => (
              <button key={type} className={`p-2 border rounded ${answers.hairType === type ? "selected" : ""}`} 
                onClick={() => handleSelect("hairType", type)}>{type}</button>
            ))}
          </div>
        </div>
  
        {/* Hair Concerns */}
        <div className="mb-4">
          <label className="block font-bold mb-2">What are your main hair concerns?</label>
          <div className="flex gap-2 flex-wrap">
            {["Frizz", "Hair Loss", "Dryness", "Split Ends", "Dandruff", "Oily Scalp", "Heat Damage"].map((concern) => (
              <button key={concern} className={`p-2 border rounded ${answers.hairConcerns === concern ? "selected" : ""}`} 
                onClick={() => handleSelect("hairConcerns", concern)}>{concern}</button>
            ))}
          </div>
        </div>
  
        {/* Washing Frequency */}
        <div className="mb-4">
          <label className="block font-bold mb-2">How often do you wash your hair per week?</label>
          <div className="flex gap-2">
            {["1-2", "3-4", "5+", "Daily"].map((freq) => (
              <button key={freq} className={`p-2 border rounded ${answers.washingFrequency === freq ? "selected" : ""}`} 
                onClick={() => handleSelect("washingFrequency", freq)}>{freq} times</button>
            ))}
          </div>
        </div>
  
        {/* Hair Goals */}
        <div className="mb-4">
          <label className="block font-bold mb-2">What are your hair goals?</label>
          <div className="flex gap-2 flex-wrap">
            {["More Volume", "Stronger Hair", "Less Breakage", "Shinier Hair", "Faster Growth"].map((goal) => (
              <button key={goal} className={`p-2 border rounded ${answers.goals === goal ? "selected" : ""}`} 
                onClick={() => handleSelect("goals", goal)}>{goal}</button>
            ))}
          </div>
        </div>
        
        {/* Back Button */}
        <button
          className="back-to-body-btn"
          onClick={() => navigate("/body")} // Navigate back to BodyPage
        >
          Back to Body Diagram
        </button>

        {/* Submit Button */}
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleGenerate}
        >
          Get Hair Care Advice
        </button>
  
        {/* Response Display */}
        {response && (
        <div className="mt-4">
            <h2 className="font-bold">Response:</h2>
            <pre className="mt-4">{response}</pre>
        </div>
        )}
      </div>
    );
  };
  
  export default HairQuestions;