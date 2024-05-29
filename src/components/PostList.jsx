/* eslint-disable react/prop-types */
import { Card, Col, Row } from "antd";
import Post from "./Post";

const PostList = ({ posts, users, comments }) => {
  return (
    <div>
      <Row gutter={[25, 25]}>
        {posts.map((post) => {
          return (
            <Col
              key={post.id}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span:24 }}
              xxl={{ span: 24 }}
            >
              <Card>
                <Post
                  post={post}
                  user={users[post.userId]}
                  comments={comments[post.id]}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PostList;
