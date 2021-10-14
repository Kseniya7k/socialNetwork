import React from "react";
import {reduxForm} from "redux-form";
import {createField, FormControlInput} from "../../util/FormControl";
import {maxLengthCreator, required} from "../../validatorForForm/validator";
import s from "../../util/FormControl.module.css";

const maxLengthForLogin = maxLengthCreator(25, "поля логин");
const maxLengthForPassword = maxLengthCreator(15, "поля пароль");

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("Email","email", FormControlInput, [required, maxLengthForLogin])}
                {createField("Password","password", FormControlInput,
                    [required, maxLengthForPassword], {type: "password"})}
                {createField(null,"rememberMe", FormControlInput, [],
                    {type:"checkbox"}, "Запомнить меня")}
                {error
                &&
                <div className={s.formSummaryError}>{error}</div>}
                <div>
                    <button>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({form: 'login'})(LoginForm);
