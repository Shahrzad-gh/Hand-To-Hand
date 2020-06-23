import React from "react";
import PostSummary from "./PostSummary";

export default function PostsList({ posts, auth, likes }) {
  const user = auth;
  console.log("POSTLIST-myPosts", posts);
  console.log("POSTLIST-Auth", auth);
  return (
    <div className="postsList">
      {posts &&
        posts.map((post) => (
          <PostSummary auth={user} post={post} key={post.id} />
        ))}
    </div>
  );
}
