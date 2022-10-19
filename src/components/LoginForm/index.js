// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {user: '', pass: '', isError: false, err: ''}

  username = event => {
    this.setState({user: event.target.value})
  }

  password = event => {
    this.setState({pass: event.target.value})
  }

  setSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  setForm = async event => {
    event.preventDefault()
    const {user, pass} = this.state
    const userDetails = {user, pass}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setSubmit()
    } else {
      console.log(response.error)
    }
  }

  render() {
    const {user, pass, err, isError} = this.state
    return (
      <div className="div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="image"
          alt="website login"
        />
        <div className="dived">
          <form className="form" onSubmit={this.setForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="logo"
              alt="website logo"
            />
            <label htmlFor="input1" className="label">
              USERNAME
            </label>
            <input
              className="label"
              type="text"
              onChange={this.username}
              value={user}
              id="input1"
              placeholder="Username"
            />
            <label htmlFor="input2" className="label">
              PASSWORD
            </label>
            <input
              className="label"
              type="password"
              onChange={this.password}
              value={pass}
              id="input2"
              placeholder="Password"
            />
            <button type="submit" className="btn1">
              Login
            </button>
            {isError && <p>{err}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
