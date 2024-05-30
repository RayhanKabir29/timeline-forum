/* eslint-disable react/prop-types */
import { Button } from "antd";
import { useState } from "react";

const Post = ({ post, user, comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <h2 className="capitalize font-bold text-xl text-black">{post.title}</h2>
      <h3 className="text-red-500">
        <span className="italic text-gray-500 font-semibold">By</span> {user?.name}
      </h3>
      <p className="text-gray-700 capitalize py-2">{post.body}</p>
      <Button
        onClick={() => setShowComments(!showComments)}
        className="bg-blue-500 text-white"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </Button>
      {showComments && (
        <ul className="px-10 py-2.5">
          {comments?.map((comment) => (
            <li key={comment.id} className="list-disc">
              <strong className="capitalize">{comment.name}:</strong>
             <span className="capitalize "> {comment.body}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Post;
