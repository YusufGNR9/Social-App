import Post from "../post/Post.jsx"
import  Share2  from "../share/Share.jsx"
import "./feed.css"
import {Posts} from "../../dummyData"

const Feed = () => {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share2 />
          {Posts.map((p)=> (
          <Post key={p.id}  post={p}/>
          ))}

        </div> 
    </div>
  )
}

export default Feed