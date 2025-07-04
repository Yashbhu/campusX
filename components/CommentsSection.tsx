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
  replies?: Comment[]; // nested replies
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
      console.error("Error fetching comments:", err);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newComment.trim(),
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
      fetchComments();
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("Server error. Try again.");
    }
  };

  const handleReplySubmit = async (parentId: string, replyContent: string) => {
    if (!replyContent.trim()) return;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: replyContent.trim(),
          authorId: "cmcmhw6rw0000fgi0oiligt96", // replace with logged-in user ID
          postId,
          parentId, // key for nested reply
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to add reply");
        return;
      }
      fetchComments();
    } catch (err) {
      console.error("Error adding reply:", err);
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="border-t mt-4 pt-4">
      <h3 className="font-semibold mb-2">Comments</h3>

      {/* Add new top-level comment */}
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
          <CommentItem
            key={comment.id}
            comment={comment}
            onReplySubmit={handleReplySubmit}
          />
        ))
      )}
    </div>
  );
}

function CommentItem({
  comment,
  onReplySubmit,
}: {
  comment: Comment;
  onReplySubmit: (parentId: string, replyContent: string) => void;
}) {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReply = () => {
    if (!replyText.trim()) return;
    onReplySubmit(comment.id, replyText.trim());
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div className="border-l pl-4 mb-2">
      <p className="text-gray-600 text-sm">
        {comment.author.name} • {new Date(comment.createdAt).toLocaleString()}
      </p>
      <p>{comment.content}</p>

      <button
        onClick={() => setShowReplyBox(!showReplyBox)}
        className="text-blue-500 text-sm mt-1"
      >
        Reply
      </button>

      {showReplyBox && (
        <div className="mt-2 flex gap-2">
          <input
            className="flex-1 border p-1 rounded"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            onClick={handleReply}
            className="bg-blue-500 text-white px-2 rounded text-sm"
          >
            Add
          </button>
        </div>
      )}

      {/* Recursively render nested replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onReplySubmit={onReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
