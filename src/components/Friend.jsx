import React from "react";

import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, email, username } = friend;

  return (
    <div className="friend">
      <h1>Name: {name}</h1>
      <p>Friend Email: {email}</p>
      <p>
        user name: <Link to={`/friend/${id}`}>{username}</Link>
      </p>
    </div>
  );
};

export default Friend;
