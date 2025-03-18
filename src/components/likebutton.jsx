import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {liked ? "Unlike" : "Like"}
    </button>
  );
}

export default LikeButton;
