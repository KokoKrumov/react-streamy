import React from 'react';
import Header from "./Header";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";

function App() {
    return (
        <BrowserRouter>
            <div className="App ui container">
                <Header/>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/new' exact component={StreamCreate}/>
                <Route path='/streams/edit' exact component={StreamEdit}/>
                <Route path='/streams/delete' exact component={StreamDelete}/>
                <Route path='/streams/show' exact component={StreamShow}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
