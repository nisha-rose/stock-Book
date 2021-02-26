import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {logoutMe} from '../../Actions/LoginActions';

class Header extends React.Component {
    onLogout = () => {
        this.props.logout();
        this.props.history.push('/');
        <Redirect to="/" />
      }
    render(){
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand className="headertxt">Global Converters</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <span   >Signed in as: {this.props.username}</span> 
                        <p><button className="logout" onClick={() =>this.onLogout()}>Logout</button></p>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
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
    return{
        logout: () =>dispatch(logoutMe())
    }
};
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
