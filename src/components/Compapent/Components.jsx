
import Main from '../Main/Main';
import comp from './Components.module.css';


function Components() {
  return (
    <div className={comp.sidebarAndMain}>
      <ul className={comp.sidebar}>
      <li>Component 1</li>
      <li>Component 2</li>
      <li>Component 3</li>
    </ul>
<Main />
    </div>
  );
}

export default Components;
