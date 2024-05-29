import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [comments, setComments] = useState({});
  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="content-container">
        <PostList posts={posts} users={users} comments={comments} />
      </div>
    </>
  );
}

export default App;
