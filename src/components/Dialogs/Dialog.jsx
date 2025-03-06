import React from 'react';
import { useSelector} from 'react-redux';
import dilogs from './Dialog.module.css';
import DialogsItem from './Dialogs__item/Dialogitem';
import Message from './Message/message';
import DialogForm from './DialogForm';

export default function Dialog() {
 
  const { userData, messagesData } = useSelector(state => state.DialogPage);

  const userDataElements = userData.map(user => (
    <DialogsItem key={user.id} avatar={user.avatar} name={user.name} id={user.id} />
  ));

  const messagesDataElements = messagesData.map(message => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  return (
    <div>
      <div className={dilogs.dialogs}>
        <ul className={dilogs.dialogs__list}>
          {userDataElements}
        </ul>
        <div className={dilogs.messages}>
          {messagesDataElements}
        </div>
      </div>
    <DialogForm/>
    </div>
  );
}

