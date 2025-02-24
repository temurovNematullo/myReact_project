import { UpdateNewMessageBodyCreator, SendBodyCreator } from '../../redux/dialogPageReducer';
import dilogs from './Dialog.module.css';
import Dialogs__item from './Dialogs__item/Dialogitem';
import Message from './Message/message';
import React from 'react';

export default function Dialog(props) {

debugger;
  let newMessageBody = props.newMessageBody; 
  let addMessageClick = () => {
    if (newMessageBody.trim() !== "") { // Проверяем, что сообщение не пустое
      props.addMessage() 
    }
  }

  let NewMessageChange = (event) => {
    let body = event.target.value;
    props.NewMessage(body)
  }
  
  
let userDataElements = props.userData.map( user => 
<Dialogs__item avatar={user.avatar} name={user.name} id={user.id} />)

let messagesDataElements = props.messagesData.map( message => 
<Message message={message.message} id={message.id} />)

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

    <div className={dilogs.addMessage}>
      <textarea className={dilogs.textareaNewMessage}  
      value={newMessageBody}
      onChange={NewMessageChange}
       ></textarea>
      <button className={dilogs.addNewMessage_button} onClick={addMessageClick}>Add message</button>
    </div>
   

    </div>
  );
}


