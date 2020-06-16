import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='center-tag'>
                <div className='contact-container'>
                <h2>
                    We are always at your service .
                </h2>
                <span className="contact">
                    You can reach us at <b>mstcvit@outlook.com </b> for all of your queries
                </span>
                </div>
            </div>
        )
    }
}

export default Contact;