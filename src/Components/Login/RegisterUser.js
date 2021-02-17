import React from 'react';
import { Button, Form, Col, Row} from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router';
import { Register } from '../../Actions/LoginActions';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';


class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "", 
            password: "", 
            email:"",
            confirmPassword:"",
            message:'',
            textStyle:''
        };
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        let user = {};
        const validateEmail = (email) => {
            var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            return re.test(email);
        }
        
        if(this.state.confirmPassword===this.state.password){
            if(validateEmail(this.state.email)){
                this.setState({message:"Looks good!",textStyle:"success"})
                user = {
                'username': this.state.username,
                'password': this.state.password,
                'role': 'user',
                'email':this.state.email,
                };
                this.props.register(user);
                if(this.props.newUserRegistrationStatus){ 
                    this.setState({message: "Registered sucesfully"});
                    alert("Registered sucesfully");
                    this.props.displayLoginscreen();
                } 
            }
            else {
                this.setState({message:"Please enter a valid email id",textStyle:"danger"})
            }
        }
        else{
            this.setState({message:"Passwords don't match.",textStyle:"danger"})
        }
            
        
    }
    handleInputChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    

    render(){
        return (
        <div>
            <p class="login-card-description">Register your account</p>
            <div id="divRegister">
                <Form horizontal="true" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formHorizontalUsername">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" value={this.state.username} onChange={this.handleInputChange} name="username" 
                        placeholder="Enter user name" required />
                    </Form.Group>
                    <Form.Group controlId="formHorizontalEmail">
                        <Form.Label for="emailId">Email address</Form.Label>
                        <Form.Control id="emailId" type="email" aria-describedby="emailHelp" value={this.state.email} 
                        onChange={this.handleInputChange} name="email" placeholder="name@example.com" required/>
                    </Form.Group>
                    <Form.Group controlId="formHorizontalPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handleInputChange} 
                        name="password" placeholder="Password" minLength="8" required/>
                    </Form.Group>
                    <Form.Group controlId="formHorizontalConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" value={this.state.confirmPassword} onChange={this.handleInputChange} 
                        name="confirmPassword" placeholder="Re-enter Password" minLength="8" required/>
                    </Form.Group>
                    {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br/>
                    <Form.Group >
                        <Button className="login-btn"  type="submit">
                        Register
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
        )
            
        
    }
      

}

const mapStateToProps = (state) => {
    return {
        newUserRegistrationStatus: state.login.newUserRegistrationStatus,
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      register: (user) =>dispatch(Register(user))
    }
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterUser));
  