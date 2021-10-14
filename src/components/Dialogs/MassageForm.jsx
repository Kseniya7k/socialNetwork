import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControlTextarea} from "../../util/FormControl";
import {maxLengthCreator, required} from "../../validatorForForm/validator";

const maxLength1000 = maxLengthCreator(10, "сообщения");

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControlTextarea}
                       name={"massageText"}
                       placeholder={"Напишите сообщение"}
                       validate={[required, maxLength1000]}/>
            </div>
            <div>
                <button>Отправить</button>
                {/*<button className={s.button} onClick={ sendMessage } disabled={isEmpty}>Отправить</button>*/}
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'sendMassages'
})(MessageForm);
