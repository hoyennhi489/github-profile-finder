import React from "react";
import { Avatar, Typography, Box, Link } from "@mui/material";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#f9f9f9",
        maxWidth: 300,
        margin: "auto",
      }}
    >
      <Avatar
        src={profile.avatar_url}
        alt={profile.login}
        sx={{ width: 80, height: 80, mb: 1 }}
      />
      <Typography variant="h6">{profile.name || profile.login}</Typography>
      <Typography variant="body2" color="text.secondary" mb={1}>
        {profile.bio || "No bio available"}
      </Typography>
      <Typography variant="body2">
        <strong>Location:</strong> {profile.location || "Not specified"}
      </Typography>
      <Typography variant="body2">
        <strong>Followers:</strong> {profile.followers ?? 0} |{" "}
        <strong>Following:</strong> {profile.following ?? 0} {/* Use ?? 0 to display 0 if the value is undefined */}
      </Typography>
      <Typography variant="body2">
        <strong>Repos:</strong> {profile.public_repos}
      </Typography>
      <Link
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 1, fontWeight: "bold", color: "#1976d2" }}
      >
        Visit GitHub Profile
      </Link>
    </Box>
  );
};

export default ProfileCard;
