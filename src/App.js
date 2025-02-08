import React from "react"; // Import React library
import HomePage from "./pages/HomePage"; // Import the HomePage component
import "./styles/App.css"; // Import global CSS styles

// Define the main App component
function App() {
  return (
    // Main container for the app
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;