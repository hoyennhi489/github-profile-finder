import React from "react";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt={profile.login} />
      <h2>{profile.name || profile.login}</h2>
      <p>{profile.bio}</p>
      <p>
        <strong>Location:</strong> {profile.location || "Not specified"}
      </p>
      <p>
        <strong>Followers:</strong> {profile.followers} | <strong>Following:</strong> {profile.following}
      </p>
      <p>
        <strong>Repos:</strong> {profile.public_repos}
      </p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default ProfileCard;