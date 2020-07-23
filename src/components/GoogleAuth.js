import React, {Component} from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        //initializing google auth library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '502264904445-jbj29d3nc3lp4as18efs21dcsr0vlq69.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }

    render() {
        return(
            <div>
                GAPI
            </div>
        )
    }
}
