import React from "react";
import CommentSummary from "./CommentSummary";

export default function CommentList({ comments, auth }) {
  console.log("comment-list", comments);
  return (
    <div className="commentsList">
      {comments &&
        comments.map((comment) => {
          console.log("map", comment);
          return (
            <CommentSummary
              comment={comment}
              key={comment[1].postId}
              user={comment[1].userId}
              username={comment[1].username}
              auth={auth}
            />
          );
        })}
    </div>
  );
}
