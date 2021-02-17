import React from 'react';
import { Button, Form, Col, Row} from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router';
import { Login as LoginAction } from '../../Actions/LoginActions';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isValid: false, 
        username: "", 
        password: "", 
        authenticated: (!this.props.authState) ? '' : this.props.authState.isAuthenticated,
        createAccount: false
    };
  }
  onFnf = () => {
    alert("This functionality is yet to be implemented.");
    this.setState({ authenticated: true });
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      'username': this.state.username,
      'password': this.state.password
    };
    this.props.login(user);
  }

  render() {
     return (
     <div>
        {this.props.authState ?  <Redirect to="/home" /> : 
      <div className="form-layout">
        <p class="login-card-description">Sign into your account</p>
        <div id="divLogin">
          <Form horizontal="true" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalUsername">
              <Col sm={12}>
                <Form.Control size="lg" value={this.state.username} name="username" className="input-lg" 
                  onChange={this.handleUsernameChange} ref="username" type="text" placeholder="Enter Username" />
              </Col>
            </Form.Group>

            <Form.Group controlId="formHorizontalPassword">
              <Col sm={12}>
                <Form.Control size="lg" value={this.state.password} name="password"
                  className="input-lg" onChange={this.handlePasswordChange} ref="password" type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group >
              <Button className="login-btn"  type="submit">
                Sign in
              </Button>
            </Form.Group>
          </Form>
        </div>
        </div> 
        }
     </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    authState: state.login.isAuthed,
    username: state.login.username
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(LoginAction(data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
