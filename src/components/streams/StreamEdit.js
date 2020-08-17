import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

// import {BrowserRouter, Route, Link} from "react-router-dom";


class StreamEdit extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        } else {
            return (

                <div>
                    <h3>Edit Stream</h3>
                    <StreamForm onSubmit={this.onSubmit}/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.stream[ownProps.match.params.id]}
}

export default connect(
    mapStateToProps,
    {fetchStream, editStream}
)(StreamEdit);
