import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./public/person/1.jpg"
            alt="profileImg"
            className="shareProfileImg"
          />
          <input
            className="shareInput"
            placeholder="what's in your mind Divya?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="purple" className="shareIcon" />
              <span className="shareOption">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="tomato" className="shareIcon" />
              <span className="shareOption">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn htmlColor="green" className="shareIcon" />
              <span className="shareOption">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOption">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
