import { useState } from "react";
import "../../styles/SkinQuestions.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SkinQuestions = () => {
    const navigate = useNavigate(); // Initialize navigate hook
    const [answers, setAnswers] = useState({
        skinType: "",
        skinConcerns: [],
        skinGoals: "",
        acneSeverity: "",
      });
  
    const [response, setResponse] = useState("");
    
    const apiKey = process.env.REACT_APP_api_key;
    const modelUrl = process.env.REACT_APP_url;

    console.log("API Key:", apiKey); // Should display the API key
    console.log("Model URL:", modelUrl); // Should display the API endpoint
    // Function to handle button selections
  const handleSelect = (question, value) => {
    if (question === "skinConcerns") {
      // Allow multiple concerns to be selected
      setAnswers((prev) => {
        const updatedConcerns = prev.skinConcerns.includes(value)
          ? prev.skinConcerns.filter((concern) => concern !== value)
          : [...prev.skinConcerns, value];
        return { ...prev, skinConcerns: updatedConcerns };
      });
    } else {
      setAnswers((prev) => ({ ...prev, [question]: value }));
    }
  };

  // Generate structured prompt
  const generatePrompt = () => {
    return `I am looking for skincare advice. 
    My skin type is: ${answers.skinType}. 
    My main skin concerns are: ${answers.skinConcerns.join(", ")}. 
    Severity of my acne is: ${answers.acneSeverity}. 
    My skincare goals are: ${answers.skinGoals}. 
    Please provide me with personalized recommendations based on this information. 
    Keep the response short but informational, and present it in bullet points.`;
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
      <h1 className="text-2xl font-bold mb-4">Skincare Questions</h1>

      {/* Skin Type */}
      <div className="mb-4">
        <label className="block font-bold mb-2">What is your skin type?</label>
        <div className="flex gap-2">
          {["Dry", "Oily", "Combination", "Sensitive", "Normal"].map((type) => (
            <button
              key={type}
              className={`p-2 border rounded ${
                answers.skinType === type ? "selected" : ""
              }`}
              onClick={() => handleSelect("skinType", type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Skin Concerns */}
      <div className="mb-4">
        <label className="block font-bold mb-2">
          What are your main skin concerns? (Select multiple)
        </label>
        <div className="flex gap-2 flex-wrap">
          {[
            "Acne",
            "Dryness",
            "Wrinkles",
            "Dark Spots",
            "Sensitivity",
            "Uneven Texture",
            "Redness",
          ].map((concern) => (
            <button
              key={concern}
              className={`p-2 border rounded ${
                answers.skinConcerns.includes(concern) ? "selected" : ""
              }`}
              onClick={() => handleSelect("skinConcerns", concern)}
            >
              {concern}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">What is the severity of your acne?</label>
        <div className="flex gap-2">
          {["Mild", "Moderate", "Severe"].map((severity) => (
            <button
            key={severity}
            className={`p-2 border rounded ${answers.acneSeverity === severity ? "selected" : ""}`}
            onClick={() => handleSelect("acneSeverity", severity)}
          >
            {severity}
          </button>
          ))}
        </div>
      </div>

      {/* Skin Goals */}
      <div className="mb-4">
        <label className="block font-bold mb-2">What are your skincare goals?</label>
        <div className="flex gap-2 flex-wrap">
          {["Clear Skin", "Hydration", "Reduce Redness", "Anti-Aging"].map((goal) => (
            <button
              key={goal}
              className={`p-2 border rounded ${
                answers.skinGoals === goal ? "selected" : ""
              }`}
              onClick={() => handleSelect("skinGoals", goal)}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleGenerate}
      >
        Get Skincare Advice
      </button>

      {/* Back Button */}
      <button
          className="back-to-body-btn"
          onClick={() => navigate("/body")} // Navigate back to BodyPage
      >
          Back to Body Diagram
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

export default SkinQuestions;
