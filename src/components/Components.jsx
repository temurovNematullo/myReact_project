import samurai from '../img/samurai.png';

function Components() {
  return (
    <div className="sidebarAndMain">
      <ul className="sidebar">
      <li>Component 1</li>
      <li>Component 2</li>
      <li>Component 3</li>
    </ul>
    <main className="main">
      <div className="main__img">
        <img src="https://cdn.fastly.steamstatic.com/steamcommunity/public/images/items/1492660/f53947e25201d549d9281bf395e383e17c640587.jpg" alt="main" />
      </div>
      <div className="main__title">
        <img src= {samurai}/>
      <p className="main__txt">Component 1 is the best component.</p>
      </div>
    </main>
    </div>
  );
}

export default Components;
