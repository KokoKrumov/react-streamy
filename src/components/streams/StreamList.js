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

    returnListOfStreams() {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
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
        streams: Object.values(state.streams)
    }
}

export default connect(
    mapStateToProps,
    {fetchStreams}
)(StreamList);
