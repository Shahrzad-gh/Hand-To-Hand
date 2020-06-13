import React from "react";
import PostSummary from "./PostSummary";

export default function PostsList({ posts, auth }) {
  const user = auth;
  console.log("POL", auth);
  return (
    <div className="postsList">
      {posts &&
        posts.map((post) => {
          return <PostSummary auth={user} post={post} key={post.id} />;
        })}
    </div>
  );
}
