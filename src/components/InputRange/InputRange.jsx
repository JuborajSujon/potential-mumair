import React, { useState } from "react";
import "./InputRange.css";

const InputRange = ({ skill }) => {
  const [rangeValue, setRangeValue] = useState(skill.level);

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setRangeValue(value);

    // Dynamically update the background based on the value
    event.target.style.background = `linear-gradient(to right, #fd6f00 ${value}%, #ddd ${value}%)`;
  };

  return (
    <div className="mb-4">
      <h3 className="font-bold text-base md:text-lg lg:text-xl lg:mb-2 tracking-wider">
        {skill.name}
      </h3>
      <input
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        id={`customRange-${skill.id}`}
        onChange={handleRangeChange}
        style={{
          background: `linear-gradient(to right, #fd6f00 ${rangeValue}%, #ddd ${rangeValue}%)`,
        }}
      />
    </div>
  );
};

export default InputRange;
