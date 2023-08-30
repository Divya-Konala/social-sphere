import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Sphere</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="SearchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="search for friend, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <div className="topbarIconBadge">2</div>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <div className="topbarIconBadge">1</div>
          </div>
        </div>
        <img src="/person/1.jpg" alt="user" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
