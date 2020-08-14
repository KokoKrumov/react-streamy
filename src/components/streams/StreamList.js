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

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div>
                    <div className="right floated content">
                        <button className="ui button primary">EDIT</button>
                        <button className="ui button negative">DELETE</button>
                    </div>
                </div>
            )
        }
    }

    returnListOfStreams() {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large camera icon aligned middle"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <div>
                <h2>Streams</h2>
                <div className='ui called list'>
                    {this.returnListOfStreams()}
                </div>

            </div>
        )
    }
}

// първото нещо, което трябва да направим е да сме сигурни, че имаме налични
//streams в props в компонента

const mapStateToProps = (state) => {
    return {
        //Object.values прави  списъка с обекти в array
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(
    mapStateToProps,
    {fetchStreams}
)(StreamList);
