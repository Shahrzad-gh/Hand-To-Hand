import React from "react";
import PostSummary from "./PostSummary";

export default function PostsList({ posts, auth, likes }) {
  const user = auth;
  console.log("POSTLIST", posts);
  console.log("POSTLIST", auth);
  console.log("POSTLIST", likes);
  return (
    <div className="postsList">
      {posts &&
        posts.map((post) => {
          return likes.postId == post.postId && auth.uid == likes.userId ? (
            <PostSummary auth={user} post={post} key={post.id} like={true} />
          ) : (
            <PostSummary auth={user} post={post} key={post.id} like={false} />
          );
        })}
    </div>
  );
}
