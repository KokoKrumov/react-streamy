import React from 'react';
import Header from "./Header";
import {Router, Route} from 'react-router-dom'
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import history from '../history'

function App() {
    return (
        <Router history={history}>
            <div className="App ui container">
                <Header/>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/new' exact component={StreamCreate}/>
                <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                <Route path='/streams/delete' exact component={StreamDelete}/>
                <Route path='/streams/show' exact component={StreamShow}/>
            </div>
        </Router>
    );
}

export default App;
