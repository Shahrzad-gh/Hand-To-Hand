import React from "react";
import CommentSummary from "./CommentSummary";

export default function PostsList({ comments, auth }) {
  console.log("POL", comments);
  return (
    <div className="commentsList">
      {comments &&
        comments.map((comment) => {
          return (
            <CommentSummary
              comment={comment}
              key={comment.postId}
              user={comment.userId}
              username={comment.username}
            />
          );
        })}
    </div>
  );
}
