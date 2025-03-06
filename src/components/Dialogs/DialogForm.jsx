import { sendMessage } from '../../redux/dialogPageReducer';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import dilogs from './Dialog.module.css';
import { validationRules } from '../../UTILS/validations';
 
 const DialogForm =()=>{
    const dispatch = useDispatch();
    const{
      register,
      handleSubmit,
      reset,
      formState: {errors, touchedFields}
  
    } = useForm({mode: "onBlur"})
  
    const onSubmit =(data)=>{
      console.log("Данные введены", data)
      dispatch(sendMessage(data.text));
      reset()
    }
  
    return(
  
  <div className={dilogs.addMessage}>
    <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
        className={`${dilogs.textareaNewMessage} ${errors.text ? dilogs.error : ""}`}
         {...register ("text", validationRules.dialogTextarea)}/>
         {touchedFields.text && errors.text && <p>{errors.text.message}</p>}
          <button type='submit' className={dilogs.addNewMessage_button} >Add message</button>
          </form>
        </div>
  
    )
  
  }
  export default DialogForm