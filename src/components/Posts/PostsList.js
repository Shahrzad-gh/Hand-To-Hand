import React from "react";
import PostSummary from "./PostSummary";

export default function PostsList({ posts, auth, likes }) {
  const user = auth;
  console.log("POSTLIST-Posts", posts);
  console.log("POSTLIST-Auth", auth);
  console.log("POSTLIST-Likes", likes);
  console.log("POSTLIST-Likes", likes);
  return (
    <div className="postsList">
      {posts &&
        posts.map(
          (post) =>
            likes && (
              <PostSummary
                auth={user}
                post={post}
                key={post.id}
                mylikes={likes.map((item) => item.postId === post.id)}
              />
            )
        )}
    </div>
  );
}
{
  /*  */
}
