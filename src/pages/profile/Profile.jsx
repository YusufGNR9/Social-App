import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

import "./profile.css"

const Profile = () => {
  return (
    <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
            <div className="profileCover">

                <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
            </div>

            <div className="profileInfo">
                <h4 className="profileInfoName">Yusuf Güner</h4>
                <span className="profileInfoDesc">Hello my friend!</span>
            </div>

            </div>
            <div className="profileRightBottom">
          <Feed />
          <Rightbar />

            </div>
          </div>

        </div>
    </>
  )
}

export default Profile