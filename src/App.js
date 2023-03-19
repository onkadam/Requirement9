import "./styles.css";
import React, { useState } from "react";

//Requirement 9
function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^([0-9]{0,2},){0,4}[0-9]{0,2}$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleBlur = () => {
    if (/^([1-9]{2},){4}[1-9]{2}$/.test(value)) {
      console.log("Valid input:", value);
    } else {
      console.log("Invalid input:", value);
    }
  };

  return (
    <div>
      <h1>Print only two digits and print five pairs of number</h1>
      <label>
        Input:
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
    </div>
  );
}

export default App;
