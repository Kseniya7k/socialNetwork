import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesPosts: state.profilePage.messagesPosts,
    }
}

export default connect (mapStateToProps, {addPost}) (MyPosts);
