import samurai from '../../../img/samurai.png';
import mypost from './MyPost.module.css';
import Post from './Post/Post';

function MyPost() {
return (
    <div>
<div className={mypost.main__title}>
<img src= {samurai}/>
<p className={mypost.main__txt}>Component 1 is the best component.</p>
</div>
  
  <Post message = "Pixel art is mu life) "/>
  <Post message = "Pixel I love PIXCEL) "/>
  </div>
)
}

export default MyPost;