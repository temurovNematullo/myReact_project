import samurai from '../../../../img/samurai.png';
import post from './Post.module.css';
import React from 'react';

function Post(props) {
    console.log("Ререндер Post", props);
    return (
        <div className={post.post__title}>
            <img src={samurai} alt='samurai'/>
            <p className={post.post__txt}>{props.message}</p>
        </div>
    )
}

export default React.memo(Post);