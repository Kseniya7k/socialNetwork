import React from 'react';
import classes from './post.module.css';
import ava from "../../../../img/ava.jpg";

class Post extends React.Component {
    constructor(props) {
        super(props);

        let startLikes = props.likesCount
        this.state = {
            likes: startLikes
        };
    }

    addLike = () => {
        this.setState({
            likes: ++this.state.likes
        });
    }

    render() {
        return (
            <div className={classes.item}>
                <img src={ava} alt="Ava"/>
                {this.props.massage}
                <div>
                    <span onClick={this.addLike}>like {this.state.likes}</span>
                </div>
            </div>
        );
    }

}

export default Post;