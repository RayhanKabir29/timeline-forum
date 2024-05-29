/* eslint-disable react/prop-types */
import { Button } from "antd";
import { useState } from "react";

const Post = ({ post, user, comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <h2 className="capitalize font-bold text-xl text-red-400">{post.title}</h2>
      <h3>by {user?.name}</h3>
      <p>{post.body}</p>
      <Button onClick={() => setShowComments(!showComments)} className="bg-blue-500 text-white">
        {showComments ? "Hide Comments" : "Show Comments"}
      </Button>
      {showComments && (
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}:</strong> {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Post;
