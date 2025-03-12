import React from "react";
import { useForm } from "react-hook-form";
import { addNewPost} from "../../../redux/mainPageReducer";
import { useDispatch } from "react-redux";
import mypost from "./MyPost.module.css";
import { validationRules } from "../../../UTILS/validations";

 const PostForm = () => {
    const dispatch = useDispatch();
  
    const {
      register,
      handleSubmit,
      reset, // Очищает поле после отправки
      formState: { errors, touchedFields },
    } = useForm({mode: "onChange"});
  
    const onSubmit = (data) => {
      console.log("Отправленные данные:", data.text);
      dispatch(addNewPost(data.text)); // Отправляем текст в Redux
      reset(); // Очищаем поле после отправки
    };
  
    return (
      <form className={mypost.AddNewPost} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            className={`${mypost.textareaPost} ${errors.text? mypost.error: ""}`}
            {...register("text", validationRules.dialogTextarea)}
          />
          {touchedFields.text && errors.text && <p>{errors.text.message}</p>}
        </div>
        <button type="submit" className={mypost.addPost_button}>
          Add post
        </button>
      </form>
    );
  };

  export default React.memo(PostForm);