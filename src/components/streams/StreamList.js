import React, {Component} from 'react';
// import {BrowserRouter, Route, Link} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchStreams} from "../../actions";


//правим го class base, за да можем да извикаме action creator в componentDidMount, защото искаме да вземем
//списъка със streams един път
class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return (<div></div>)
    }
}

// първото нещо, което трябва да направим е да сме сигурни, че имаме налични
//streams в props в компонента

export default connect(
    null,
    {fetchStreams}
)(StreamList);
