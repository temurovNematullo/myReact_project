export const validationRules = {
    email: {
        required: "Введите email",
        pattern:{
            value: /^\S+@\S+\.\S+$/,
            message: "Введите корректный email"
        }
    },
    password: {
        required: "Введите пароль",
        minLength: {
        value: 6,
        message: "Минимум 6 символов"
        }
    },
    dialogTextarea: {
        required: "Ведите текст сообщения",
        maxLength: {
            value: 30,
            message: "Не дахуя ли символов"
        }
    },
    confirmPassword: (watch) => ({
        required: "Повторите пароль",
        validate: (value) =>
        value === watch("password") || "Пароли не совпадают"
    })
    };