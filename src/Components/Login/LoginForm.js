import React from 'react';
import Login from './Login';
import RegisterUser from './RegisterUser';
import 'bootstrap/dist/css/bootstrap.min.css';


class LoginForm extends React.Component {
    constructor(){
        super();
        this.state ={
            login: true
        }
    }

    handleClick = () =>{
        this.setState({login:!this.state.login});
    }
    render(){
        return (
            <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className=" row  login-card">
                    <div className="col-md-5">
                        <img src="/Images/login.jpg" alt="login" className="login-card-img"/>
                    </div>
                    <div className="col-md-7 my-auto">
                        <div className="card-body">
                        {this.state.login?<Login history={this.props.history} />:<RegisterUser displayLoginscreen={this.handleClick}/>}
                        
                        <br/>
                        {this.state.login ? <p>Don't have an account? <a href="#" onClick={this.handleClick}>Register here</a></p>:
                        <p>Do you have an account? <a href="#" onClick={this.handleClick}>Login here</a></p>}
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default LoginForm;