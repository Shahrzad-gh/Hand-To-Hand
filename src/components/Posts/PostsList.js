import React from "react";
import Post from "./Post";

export default function PostsList({ posts }) {
  console.log("PostList", posts);
  return (
    <div className="postsList">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
}
