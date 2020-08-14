import React, {Component} from 'react';
// reduxForm  e много подобен на connect - action creator и взема form data от нашия компонент (това става автоматично)

// import {BrowserRouter, Route, Link} from "react-router-dom";

import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";


//правим го class-base component, защото ще имаме много помощни методи
//за да си организираме по-добре кода

class StreamCreate extends Component {


    onSubmit = (submitValue) => {
        this.props.createStream(submitValue);
    }

    render() {
        return (
            <div>
                <h1>Create Stream</h1>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default connect(
    null,
    {createStream}
)(StreamCreate);
