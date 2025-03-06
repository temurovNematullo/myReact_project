import dilogs from './../Dialog.module.css';
import {  Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

 export default function DialogsItem(props) {
  const location = useLocation();
  let adress = `/dialog/${props.id}`;
  return (
    <li className={`${dilogs.dialogs__item} ${
      location.pathname === '/dialog' ? dilogs.active : ''
    }`}>
      <img src={props.avatar} alt={props.name} className={dilogs.avatar} />
      <Link to={adress}>{props.name}</Link>
    </li>
  );
}




