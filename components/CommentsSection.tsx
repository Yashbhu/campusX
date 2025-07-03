"use client";
import { useEffect, useState } from "react";

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
};

export default function CommentsSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?postId=${postId}`);
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newComment,
          authorId: "cmcmhw6rw0000fgi0oiligt96", // replace with logged-in user ID
          postId,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }
      setNewComment("");
      fetchComments(); // refresh comments
    } catch (err) {
      console.error(err);
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="border-t mt-4 pt-4">
      <h3 className="font-semibold mb-2">Comments</h3>

      <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
        <input
          className="flex-1 border p-2 rounded"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded">Add</button>
      </form>

      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="border p-2 rounded mb-2">
            <p className="text-gray-600 text-sm">
              {comment.author.name} • {new Date(comment.createdAt).toLocaleString()}
            </p>
            <p>{comment.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
