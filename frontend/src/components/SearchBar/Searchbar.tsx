import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../List.tsx"

function SearchBar() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Search courses below :)</h2>
      {/* for debugging:
      <p>Searching for: {inputText}</p> */}
      <TextField
        id="outlined-basic"
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        label="Search"
      />
      {/* The list below would become the subject panel once that component is finished */}
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;
