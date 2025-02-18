import samurai from '../../../../img/samurai.png';
import post from './Post.module.css';

function Post(props) {
    return (
        <div className={post.post__title}>
            <img src={samurai} />
            <p className={post.post__txt}>{props.message}</p>
        </div>
    )
}


export default Post;