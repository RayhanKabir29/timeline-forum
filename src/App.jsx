import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import { Spin } from "antd";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [comments, setComments] = useState({});
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true);
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const commentsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const usersMap = usersResponse.data.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    const commentsMap = commentsResponse.data.reduce((acc, comment) => {
      if (!acc[comment.postId]) {
        acc[comment.postId] = [];
      }
      acc[comment.postId].push(comment);
      return acc;
    }, {});

    setPosts(postsResponse.data.sort((a, b) => b.id - a.id));
    setUsers(usersMap);
    setComments(commentsMap);
    setLoader(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-gradient-to-b from-cyan-100 to-blue-100">
      <h1 className="text-center py-8 font-bold">Timeline Forum</h1>
      <hr />
      <div className="content-container mt-4">
        {loader ? (
         <Spin />
        ) : (
          <PostList posts={posts} users={users} comments={comments} />
        )}
      </div>
    </div>
  );
}

export default App;
