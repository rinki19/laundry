import {Component} from 'react'
import './loginpage.css'
import Navbar from './Navbar'

class LoginPage extends Component {
    state = {email:"",
             password:""
            }

    onSubmitSuccess = () => {
        const {history} = this.props 
        history.replace("/")
    }

    submitForm = async event => {
        event.preventDefault()
        const {email,password} = this.state 
        const userDetails = {email,password}
        const url = "https://localhost:3000/login"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)

        }
        const response = await fetch(url,options)
        const data = await response.json()
        if (response.ok=== true) {
            this.onSubmitSuccess()
        }

    }

    onChangeEmail = event => {
        this.setState({email: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    render() {
        const {email,password} = this.state 
        return (
            <div className='login-container'>
                <form  onSubmit={this.submitForm}>
                <div className='form-container'>
                <input type="email" placeholder="Enter a Email" value={email} onChange={this.onChangeEmail}/>
                <input type="password" placeholder="Enter a Password" value={password} onChange={this.onChangePassword}/>
                <button className='submit-button' type="submit" backgroundColor="blue">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}
export default LoginPage 