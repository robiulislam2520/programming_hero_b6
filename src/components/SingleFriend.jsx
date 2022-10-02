import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleFriend = () => {
  const [friendDetails, setFriendDetails] = useState();

  const { friendId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriendDetails(data));
  }, [friendId]);

  //   console.log(friendDetails);
  return (
    <div>
      <h1>Single friend id: {friendId}</h1>
      <h3>{friendDetails?.name}</h3>
    </div>
  );
};

export default SingleFriend;
