import LikeButton from "./likebutton";

function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", marginBottom: "16px", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <img 
          src={post.profilePic} 
          alt={post.username} 
          style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" }} 
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;
