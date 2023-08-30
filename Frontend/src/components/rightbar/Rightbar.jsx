import "./rightbar.css";

import { Users } from "../../dummydata";
import Online from "../online/Online";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img src="/gift.png" alt="gift" className="birthdayImg" />
        <span className="birthdayText">
          <b>Olivia Green</b> & <b>3 other friends</b> have birthday today
        </span>
      </div>
      <img src="/ad.png" alt="ad" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Current City:</span>
          <span className="rightbarInfoValue">Bangalore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Hometown:</span>
          <span className="rightbarInfoValue">Vizag</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship Status:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="/person/2.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/3.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/4.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/5.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/6.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/7.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/8.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/9.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="/person/10.jpg"
            alt="friend"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Wick</span>
        </div>
      </div>
    </>
  );
};

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper"></div>
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
};

export default Rightbar;
