import React from 'react';
import s from './post.module.css';
import ava from "../../../../img/ava.jpg";

class Post extends React.Component {
    constructor(props) {
        super(props);
        let startLikes = props.likesCount;

        this.state = {
            likes: startLikes
        };
    }

    addLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        return (
            <div className={s.item}>
                <div>
                    <img src={ava} alt="Ava"/>
                    <div className={s.like}>
                        <span onClick={this.addLike}>like {this.state.likes}</span>
                    </div>
                </div>
                <div className={s.postBlock}>{this.props.massage}</div>
            </div>
        );
    }

}

export default Post;