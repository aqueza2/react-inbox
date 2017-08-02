import React, {Component} from 'react';
import Message from './Message'
import seeds from './seeds'

export default class MessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: seeds
        }

    }
    get messages(){
        return this.state.messages.map((message, i) => <Message index = {message.id} key={i} subject={message.subject}/>)
    }

    onMarkRead() {
        // grab message id from
    }

    render() {
        return (
            <div className="MessageList">
                <table>
                    <thead>
                    <tr>
                        <td><button className="selectAll btn btn-default"><span className="glyphicon glyphicon-minus"></span></button></td>
                        <td>
                            <button>Mark as Read</button>
                            <button>Mark as Unread</button>
                        </td>
                        <td>
                            <select className="dropdown-add">
                            <option defaultValue="selected">Apply Label</option>
                            <option value="Personal">Personal</option>
                            <option value="Work">Work</option>
                            </select>
                        </td>
                        <td>
                            <select className="dropdown-remove">
                                <option defaultValue="selected">Remove Label</option>
                                <option value="Personal">Personal</option>
                                <option value="Work">Work</option>
                            </select>
                        </td>
                        <td><button className="delete btn btn-default"><span className="glyphicon glyphicon-trash"></span></button></td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.messages}
                    </tbody>
                </table>
            </div>
        );
    }
}