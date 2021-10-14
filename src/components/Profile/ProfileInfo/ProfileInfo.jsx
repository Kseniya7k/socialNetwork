import React from "react";
import WelcomePage from "../WelcomePage/WelcomePage";
import PageUser from "../PageUser/PageUser";

const ProfileInfo = (props) => {
    const {profile} = props;

    if (!profile) {
        return <WelcomePage />
    } else {
        return <PageUser {...props} />
    }
}

export default ProfileInfo;