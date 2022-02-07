import React from "react";
import CommentSummary from "./CommentSummary";

export default function CommentList({ comments, auth }) {
  return (
    <div className="commentsList">
      {comments &&
        comments.map((comment, index) => {
          return (
            <CommentSummary
              comment={comment}
              key={index}
              user={comment[1].userId}
              username={comment[1].username}
              auth={auth}
            />
          );
        })}
    </div>
  );
}
