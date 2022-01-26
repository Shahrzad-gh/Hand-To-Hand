import React from "react";
import PostSummary from "./PostSummary";

export default function PostsList({ posts, auth }) {
  const user = auth;

  return (
    <div className="postsList">
      {posts &&
        posts.map((post) => (
          <PostSummary auth={user} post={post} key={post.id} />
        ))}
    </div>
  );
}
