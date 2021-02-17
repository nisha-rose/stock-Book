import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import RawMaterials from './Rawmaterials';
import {logoutMe} from '../../Actions/LoginActions';

class Home extends React.Component {
    onLogout = () => {
        this.props.logout();
        this.props.history.push('/');
        <Redirect to="/" />
      }
    render(){
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >Global Converters</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {this.props.username}
                        <p><button onClick={() =>this.onLogout()}>Logout</button></p>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container" id="wrap" >
                    <Tabs defaultActiveKey="Raw_Materials" id="uncontrolled-tab-example">
                        <Tab eventKey="Raw_Materials" title="Raw Materials">
                            <RawMaterials/>
                        </Tab>
                        <Tab eventKey="Finished_Products" title="Finished Products">
                            <p>Finished Products</p>
                        </Tab>
                    </Tabs>
                </div>
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
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
