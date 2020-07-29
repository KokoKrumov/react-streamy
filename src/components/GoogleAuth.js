import React, {Component} from 'react';
import {connect} from 'react-redux'
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {
    // state = {isSignIn: null}

    componentDidMount() {
        //initializing google auth library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '877805092276-uvkd8cbt42dq8d25bj0941be67kpkije.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // const auth = gapi.auth2.getAuthInstance()
                //auth object
                // чрез този обект и методите контролираме authentication-a на потребителите
                this.auth = window.gapi.auth2.getAuthInstance();
                //component level state
                // - след като инициализираме auth library и имаме достъп до auth object
                // ще update-нем component level state с това дали user-ът е sign in или sign out

                // this.setState({isSignIn: this.auth.isSignedIn.get()});
                //(ъпдейтваме auth state в redux store)
                this.onAuthChange(this.auth.isSignedIn.get())

                // след като ъпдейтнем state, ще го 'слушаме' за промени,
                // това ще ререндне автоматично компонента
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    //call back function, за това я правим arrow
    // така, че нейният контекст да се закрепи към компонента
    //всеки пут, когато статусът на user се смени, функцията ще се извика
    // onAuthChange = () => {
    //     this.setState({isSignIn: this.auth.isSignedIn.get()});
    // };

    onAuthChange = (isSignIn) => {
        if (isSignIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    };

    signInClick = () => {
        this.auth.signIn();
    }
    signOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.signOutClick} className='ui button red google'>
                    <i className='google icon'/>
                    sign OUT
                </button>
            )
        } else {
            return (
                <button onClick={this.signInClick} className='ui button red google'>
                    <i className='google icon'/>
                    sign IN
                </button>
            )
        }
    }


    render() {
        return (
            <div>
                {this.renderAuthButton()}
                {/*{this.props.userId}*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,

    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
