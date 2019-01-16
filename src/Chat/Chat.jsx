import React, {Component} from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';

import './Chat.css';

import { showChatAction } from '../redux/actions/showChatAction';
import { connect } from 'react-redux';

class Chat extends Component {
    static propTypes = {
        showChat: PropTypes.bool,
    };

    state = {
        messages: [
            {
                userPhoto: "https://trello-avatars.s3.amazonaws.com/9f399e7fb27211624d070b02ad58fef1/original.png",
                userName: "Dimon",
                id: "123321",
                userMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet assumenda deserunt enim fugiat praesentium reprehenderit saepe sapiente soluta veniam?",
            },
            {
                userPhoto: "https://trello-avatars.s3.amazonaws.com/67c1339cc85cb27eb93e0fd95fde20e1/original.png",
                userName: "Andriy",
                id: "123325",
                userMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet assumenda deserunt enim fugiat praesentium reprehenderit saepe sapiente soluta veniam?",
            },
            {
                userPhoto: "https://trello-avatars.s3.amazonaws.com/cdaaff7c2c8bd0e2a17f22e8a44e8ddd/original.png",
                userName: "Yura",
                id: "123326",
                userMessage: "Lorem ipsum dolor sit amet, consectetur",
            },
            {
                userPhoto: "https://trello-avatars.s3.amazonaws.com/cdaaff7c2c8bd0e2a17f22e8a44e8ddd/original.png",
                userName: "Yura",
                id: "123327",
                userMessage: "Lorem ipsum dolor sit amet, consectetur",
            },
        ]
    };


    render() {
        return (
            <div className={`"chat--box" ${this.props.showChat ? 'chat--show' : 'chat--hidden'}`}>

                <div className="current--user">
                    <span className="close--chat" onClick={this.props.showChatAction}>X</span>
                </div>
                <form action="#" className="text--form">
                <textarea className="textArea--chat" name="new--message" maxLength='100'>
                </textarea>
                    <input type="submit" className="text--submit"/>
                </form>
                <h3 className='chat--title'>Last comments</h3>
                <div className="message--box">
                    {this.state.messages.map(el => <Message photo={el.userPhoto} name={el.userName} message={el.userMessage} key={el.id}/>)}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showChat: state.showChat,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showChatAction: function () {
            dispatch(showChatAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);