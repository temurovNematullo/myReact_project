import Dialog from './Dialog'
import { UpdateNewMessageBodyCreator, SendBodyCreator } from '../../redux/dialogPageReducer';
import React from 'react';


export default function DialogContainer(props) {

  let state = props.store.getState()


  let addMessageClick = () => {
      props.store.dispatch(SendBodyCreator());
    }
  

  let NewMessageChange = (body) => {
    props.store.dispatch(UpdateNewMessageBodyCreator(body))
  }
  
  return <Dialog addMessage = {addMessageClick} NewMessage = {NewMessageChange} 
  userData = {state.DialogPage.userData} messagesData = {state.DialogPage.messagesData} newMessageBody = {state.DialogPage.newMessageBody}/>
}


