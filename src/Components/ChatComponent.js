import React , { Component } from 'react';

class ChatComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			openChat : false,
			message : '',
		}

		this.handleOpenChat = this.handleOpenChat.bind(this);
		this.closeChat = this.closeChat.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidUpdate() {
		if(this.state.openChat){
			this.scrollToBottom();
		}
		
	}

	scrollToBottom() {
		const scrollHeight = this.refs.msg.scrollHeight;
	 	const height = this.refs.msg.clientHeight;
	 	const maxScrollTop = scrollHeight - height;
	 	this.refs.msg.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}

	handleOpenChat() {
		this.setState({openChat: true});
	}

	closeChat() {
		this.setState({openChat: false});
	}

	sendMessage() {
		console.log(this.refs.msg_value.innerHTML)
	}

	render () {
		if(this.state.openChat){
			return (
				<div className="floating-chat expand">
		            <div className="chat enter">
		                <div className="header"><span className="title">what's on your mind?</span><button onClick={this.closeChat} className="btn btn-link" type="button"><i className="fa fa-times"></i></button></div>
		                <ul className="messages" ref="msg">
		                    <li className="other">Item 1</li>
		                    <li className="self">Item 2</li>
		                    <li className="other">Item 3</li>
		                    <li className="self">Item 4</li>
		                    <li className="self">Item 4</li>
		                    <li className="self">Item 4</li>
		                </ul>
		                <div className="footer">
		                    { /*<input className="text-box" placeholder="Type your Message"/>*/}
		                    <div className="text-box" contentEditable ref="msg_value"></div>
		                    <button className="btn btn-success" onClick={this.sendMessage} id="sendMessage"><i className="fa fa-send"></i></button></div>
		            </div>
		        </div>
			)
		}else {
			return (
				<div className="floating-chat" onClick={this.handleOpenChat}>
		            <i className="fa fa-commenting"></i>
		        </div>
			)
		}
	}
}

export default ChatComponent ;