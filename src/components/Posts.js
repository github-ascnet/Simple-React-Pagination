import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className="text-primary">Loading...</h2>;
  }

  return (
    <ul className="list-group list-group-flush mb-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {post.id + ". " + post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
