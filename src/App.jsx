import PostCard from "./components/postcard";

function App() {
  const posts = [
    {
      id: 1,
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      username: "JohnDoe",
      content: "Enjoying the sunny day! ",
    },
    {
      id: 2,
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "JaneSmith",
      content: "Just finished reading an amazing book. ",
    },
    {
      id: 3,
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      username: "MikeBrown",
      content: "Had a great workout today! ",
    },
  ];

  return (
    <div style={{ padding: "16px", maxWidth: "500px", margin: "auto" }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
