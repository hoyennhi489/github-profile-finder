import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      gap: 2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
    }}
    >
      <TextField 
        id="outlined-basic" 
        label="GitHub Username" 
        variant="outlined" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <Button type="submit" variant="contained">Search</Button>
      </Box>
  );
};

export default SearchBar;