import { useSelector } from "react-redux";
import { postsSelector } from "../store/selector";
import Post from "./Post";

export const Posts = () => {
  const posts = useSelector(postsSelector);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={Math.random()}
          author={post.author}
          authorPhoto={post.authorPhoto}
          nickname={post.authorNickname}
          content={post.postText}
          image={post.postPicture}
          date={post.date}
          replies={post.comments}
          reposts={post.shares}
          likes={post.likes}
        />
      ))}
    </div>
  );
};
