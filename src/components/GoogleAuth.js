import React, {Component} from 'react';

class GoogleAuth extends Component {
    state = {isSignIn: null}


    componentDidMount() {
        //initializing google auth library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '502264904445-jbj29d3nc3lp4as18efs21dcsr0vlq69.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // const auth = gapi.auth2.getAuthInstance()
                //auth object
                // чрез този обект и методите контролираме authentication-a на потребителите
                this.auth = window.gapi.auth2.getAuthInstance();
                //component level state
                // - след като инициализираме auth library и имаме достъп до auth object
                // ще update-нем component level state с това дали user-ът е sign in или sign out

                this.setState({isSignIn: this.auth.isSignedIn.get()});


                // след като ъпдейтнем state, ще го 'слушаме' за промени,
                // това ще ререндне автоматично компонента
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    //call back function, за това я правим arrow
    // така, че нейният контекст да се закрепи към компонента
    //всеки пут, когато статусът на user се смени, функцията ще се извика
    onAuthChange = () => {
        this.setState({isSignIn: this.auth.isSignedIn.get()});
    };

    renderAuthButton() {
        if (this.state.isSignIn === null) {
            return <div>I dont know if i'm sign in</div>
        } else if(this.state.isSignIn){
            return <div>i'm sign in</div>
        } else {
            return <div>i'm NOT sign in</div>
        }
    }


    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;
