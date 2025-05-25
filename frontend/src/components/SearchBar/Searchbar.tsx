import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../List.tsx"
import { Paper } from "@mui/material";

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
      {/* <h2>Search courses below :)</h2> */}
      {/* for debugging:
      <p>Searching for: {inputText}</p> */}
      <Paper
        sx={{
          /* For Glassmorphism */
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 5)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          id="filled-search"
          onChange={handleInputChange}
          variant="filled"
          color="success"
          fullWidth
          label="Search for a course..."
        />
      </Paper>
      
    </div>
  );
}

export default SearchBar;
