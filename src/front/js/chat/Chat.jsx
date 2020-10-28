import React, { Component } from 'react';
import { getJSON } from "../utils/HttpUtils";
import io from "socket.io-client";

export default class ChatApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comment: '',
            comments: []
        };

        this.socket = io('0.0.0.0:3000');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addComment(data);
        });

        const addComment = data => {
            this.setState({ comments: [...this.state.comments, data] });
            console.log(this.state.comments);
        };

        this.sendComment = event => {
            event.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                username: this.state.username,
                comment: this.state.comment
            })
            this.setState({ comment: '' });

        }
    }

    componentDidMount() {
        getJSON("/api/chat")
            .then(chatResponseJson => this.setState({ comments: chatResponseJson }));
    }

    render() {
        return (
            <div className="container">
                <div className="body">
                    <div className="title">Chat</div>
                    <hr />
                    <div className="comments">
                        {this.state.comments.map(comment => {
                            return (
                                <div>{comment.username}: {comment.comment}</div>
                            )
                        })}
                    </div>

                </div>
                <div className="footer">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} />
                    <br />
                    <input type="text" placeholder="Comment" value={this.state.comment} onChange={ev => this.setState({ comment: ev.target.value })} />
                    <br />
                    <button onClick={this.sendComment}>コメントする</button>
                </div>
            </div>
        );
    }
}
