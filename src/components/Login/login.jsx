import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { validationRules } from "../../UTILS/validations";
import log from "./login.module.css";
import { useDispatch} from "react-redux";
import { Login } from "../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const LoginForm = () => {
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, touchedFields },
    } = useForm({ mode: "onBlur" });

    const [captchaToken, setCaptchaToken] = useState(null);
  
    const onSubmit = (data) => {
        console.log("Данные из формы", data);
        if (!captchaToken) {
            setError("captcha", { type: "manual", message: "Пройдите капчу!" });
            return;
        }
        dispatch(Login(data.email, data.password, data.rememberMe, setError, navigate, captchaToken));
      
    };

   
    return (
        <form className={log.logForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={log.formGroup}>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    className={`${log.emailInput} ${errors.email || errors._error ? log.error : ""}`}
                    {...register("email", validationRules.email)}
                />
                {touchedFields.email && errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className={log.formGroup}>
                <label>Пароль</label>
                <input
                    className={`${log.emailInput} ${errors.password || errors._error ? log.error : ""}`}
                    type="password"
                    {...register("password", validationRules.password)}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className={log.formGroup}>
                <label>
                    <input className={log.checkbox} type="checkbox" {...register("rememberMe")} />
                    Запомнить меня
                </label>
            </div>

            {errors._error && (
                
                    <p>{errors._error.message}</p>
                
            )}
           <ReCAPTCHA
        
    sitekey="6LeBNvIqAAAAAF3mGv8NRxx46VKtH596-FF0eff1"
    onChange={(token) => {
     
        setCaptchaToken(token);
    }}
/>

            {errors.captcha && <p>{errors.captcha.message}</p>}
            <button className={log.logButton} type="submit">Войти</button>
        </form>
    );
};

export default React.memo(LoginForm);
