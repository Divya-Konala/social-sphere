import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummydata";
import { useState } from "react";

const Post = ({ post }) => {
  const user = Users.find((user) => user.id === post.userId);
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture}
              alt="profileImg"
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="postImg" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/like.png"
              alt="like"
              className="likeIcon"
              onClick={likeHandler}
            />
            <img src="/heart.png" alt="heart" className="likeIcon" />
            <span className="postLikeCount">{likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
