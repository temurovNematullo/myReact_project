import samurai from '../../img/samurai.png';
import main from './Main.module.css';
import MyPost from './MyPost/MyPost';

function Main() {
  return (

    <main className={main.main}>
      <div className={main.main__img}>
        <img src="https://cdn.fastly.steamstatic.com/steamcommunity/public/images/items/1492660/f53947e25201d549d9281bf395e383e17c640587.jpg" alt="main" />
      </div>
     <MyPost />
    </main>
    
  );
}

export default Main;
