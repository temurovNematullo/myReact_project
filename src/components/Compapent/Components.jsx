
import Dialog from '../Dialogs/Dialog';
import Main from '../Main/Main';
import comp from './Components.module.css';


function Components() {
  return (
    <div className={comp.sidebarAndMain}>
      <ul className={comp.sidebar}>
      <li> <a href=''>Profile</a></li>
      <li> <a href=''>Messages</a></li>
      <li> <a href=''>News</a></li>
      <li> <a href=''>Clips</a></li>
    </ul>
    <div className="main">
    {/* <Main /> */}
    <Dialog />
      </div>
   
    </div>
  );
}

export default Components;
