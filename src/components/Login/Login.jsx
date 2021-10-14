import React from "react";
import s from "./login.module.css";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginMe, logoutMe} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = ({ loginMe,isAuth }) => {
    const onSubmit = (formData) => {
        loginMe(formData.email, formData.password, formData.rememberMe)
    };

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.bodyLogin}>
            <h1>Регистрация</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginMe, logoutMe })(Login);