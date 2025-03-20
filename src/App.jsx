import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setProfile(data);
    } catch (error) {
      console.error(error.message);
      setProfile(null);
    }
  };

  return (
    <div className="app">
      <h1>GitHub Profile Finder</h1>
      <SearchBar onSearch={fetchProfile} />
      <ProfileCard profile={profile} />
    </div>
  );
};

export default App;