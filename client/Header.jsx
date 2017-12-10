import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return { currentUser: state.users.current, loginForm: state.forms.login }
}

function mapDispatchToProps(dispatch) {
    return {
        HandleUsernameChange: function (event) {
            dispatch({ type: 'LOGIN_USERNAME_CHANGE', payload: event.target.value })
        },
        HandlePasswordChange: function (event) {
            dispatch({ type: 'LOGIN_PASSWORD_CHANGE', payload: event.target.value })
        },
        Login: function (username, password) {
            //TODO: handle invalid login credentials 
            dispatch({ type: "LOGIN", payload: { username, password } })
        },
        Logout: function () {
            dispatch({ type: "LOGOUT", payload: {} })
        }
    }
}

class Header extends React.Component {
    greeting() {
        if (this.props.currentUser) {
            return <div>Hello, {this.props.currentUser.username}}</div>
        }

        return (
            <div>
                <span>Hello, Guest</span>
                <form onSubmit={this.props.Login}>
                    <input type="text" name="username" value={this.props.loginForm.username} onChange={this.props.HandleUsernameChange.bind(this)} />
                </form>
                <div>
                    <input type="password" name="password" value={this.props.loginForm.password} onChange={this.props.HandlePasswordChange.bind(this)} />
                </div>
                <div><button onClick={() => {
                    this.props.Login()
                }}>Login</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <header >
                <h1>Meeter</h1>
                <nav></nav>
                {this.greeting()}
            </header >
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)