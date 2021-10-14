import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../validatorForForm/validator";
import {FormControlTextarea} from "../../../../util/FormControl";

const maxLength30 = maxLengthCreator(30, "поста")
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControlTextarea}
                       name={"textPost"}
                       placeholder={"Напишите текст вашего поста"}
                    validate={[required, maxLength30]}/>
                {/*<Field component={"textarea"} name={"textPost"} onChange={onChangeHandler} ref={textNewsPosts} value={newPostText} />*/}
            </div>
            <div>
                <button>Add post</button>
                {/*<button onClick={addPostHandler} disabled={isEmpty}>Add post</button>*/}
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'addPost'
})(PostForm);