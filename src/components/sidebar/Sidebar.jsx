import "./sidebar.css"
import {RssFeed,Group,Bookmark,HelpOutline,WorkOutline} from "@material-ui/icons"
import {Chat, PlayCircleFilled,Event , School} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeed className="sidebarIcon" />
                <span className="sidebarListItemTextx">Feed</span>
            </li>
            <li className="sidebarListItem">
                <Chat className="sidebarIcon" />
                <span className="sidebarListItemTextx">Chats</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleFilled className="sidebarIcon" />
                <span className="sidebarListItemTextx">Videos</span>
            </li>
            <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                <span className="sidebarListItemTextx">Groups</span>
            </li>
            <li className="sidebarListItem">
                <Bookmark className="sidebarIcon" />
                <span className="sidebarListItemTextx">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <HelpOutline className="sidebarIcon" />
                <span className="sidebarListItemTextx">Questions</span>
            </li><li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                <span className="sidebarListItemTextx">Jobs</span>
            </li><li className="sidebarListItem">
                <Event className="sidebarIcon" />
                <span className="sidebarListItemTextx">Events</span>
            </li><li className="sidebarListItem">
                <School className="sidebarIcon" />
                <span className="sidebarListItemTextx">Courses</span>
            </li>
          </ul>
             <button className="sidebarButton">Show More</button>
              <hr className="sidebarHr" />
              <ul className="sidebarFriendList">
                {Users.map(u => (
                  <CloseFriend key={u.id} user={u}/>
                ))}
              </ul>
        </div>
    </div>
  )
}

export default Sidebar