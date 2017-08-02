import React, {Component} from 'react';

export default class Message extends Component {
    constructor(props){
        super(props)
        this.state={
            subject: this.props.subject,
            read: false,
            selected: false
        }
    }

    render() {
        return (
            <tr className={this.state.read ? "read" : "unread"}>
                <td><input type="checkbox" id={"message-" + this.props.index}/></td>
                <td><button><span className="glyphicon glyphicon-star-empty"></span></button></td>
                <td>{this.state.subject}</td>
            </tr>
        );




        //left to do:
        //add handler to message to update selected state of message
        //add handler to on mark read(button), set selected messages to 'read' = true
        
    }
}