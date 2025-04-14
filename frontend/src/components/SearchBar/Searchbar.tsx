import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../List.tsx"

type SearchBarProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ inputText, setInputText }: SearchBarProps) {
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
    </div>
  );
}

export default SearchBar;
