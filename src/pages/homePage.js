import React, { useState } from "react";
import SearchInput from "../components/ui/form/items/searchInput";

export default function HomePage(props) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="wrapperDisplay">
      <div className="search">
        <SearchInput handleChange={handleChange} value={value} />
      </div>
      <div className="result">
        <p>{value}</p>
      </div>
    </div>
  );
}
