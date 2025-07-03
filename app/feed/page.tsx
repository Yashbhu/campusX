"use client";
import { useEffect, useState } from "react";

type Post = {
  id: string;
  content: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
};

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [content, setContent] = useState("");

  // Fetch posts initially
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          authorId: "HARDCODED_USER_ID", // yahan logged-in user ka id hona chahiye future me
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Something went wrong!");
        return;
      }
      alert("Post created!");
      setContent("");
      fetchPosts(); // refresh posts list
    } catch (err) {
      console.error(err);
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">College Feed</h1>

      {/* Create Post Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 border p-4 rounded">
        <textarea
          placeholder="What's on your mind?"
          className="border p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded">Post</button>
      </form>

      {/* Posts Feed */}
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border p-4 rounded mb-4">
            <p className="text-gray-600 text-sm">
              Posted by {post.author.name} on {new Date(post.createdAt).toLocaleString()}
            </p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
