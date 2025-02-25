import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNewMessageBody, sendMessage } from '../../redux/dialogPageReducer';
import dilogs from './Dialog.module.css';
import Dialogs__item from './Dialogs__item/Dialogitem';
import Message from './Message/message';

export default function Dialog() {
  const dispatch = useDispatch();
  const { userData, messagesData, newMessageBody } = useSelector(state => state.DialogPage);

  const addMessageClick = () => {
    if (newMessageBody.trim() !== "") {
      dispatch(sendMessage());
    }
  };

  const NewMessageChange = (event) => {
    const body = event.target.value;
    dispatch(updateNewMessageBody(body));
  };

  const userDataElements = userData.map(user => (
    <Dialogs__item key={user.id} avatar={user.avatar} name={user.name} id={user.id} />
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
      <div className={dilogs.addMessage}>
        <textarea
          className={dilogs.textareaNewMessage}
          value={newMessageBody}
          onChange={NewMessageChange}
        ></textarea>
        <button className={dilogs.addNewMessage_button} onClick={addMessageClick}>Add message</button>
      </div>
    </div>
  );
}