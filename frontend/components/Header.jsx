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
        Login: function (event) {
            event.preventDefault()

            dispatch({ type: 'LOGIN' })
            let loginForm = this.props.loginForm
            fetch(window.location.origin + '/security/login', {
                method: 'POST',
                body: JSON.stringify(loginForm)
            }).then(response => {
                return response.json()
            }).then(response => {
                dispatch({ type: 'LOGIN_SUCCESSFUL', payload: response })
            }).catch(error => {
                console.dir(error)
            })
        },

        Logout: function () {
            console.log('dispatching')
            dispatch({ type: "LOGOUT", payload: {} })
        }
    }
}

class Header extends React.Component {
    greeting() {
        if (this.props.currentUser) {
            return <div>Hello, {this.props.currentUser.username}</div>
        }

        return (
            <div>
                <span>Hello, Guest</span>
                <form onSubmit={this.props.Login.bind(this)} >
                    <input type="text" name="username" value={this.props.loginForm.username} onChange={this.props.HandleUsernameChange.bind(this)} />
                    <input type="password" name="password" value={this.props.loginForm.password} onChange={this.props.HandlePasswordChange.bind(this)} />
                    <input type="submit" value="Submit" />
                </form>
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