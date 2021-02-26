import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Header from '../Header/Header'
import RawMaterials from './Rawmaterials';
import FinishedProducts from './FinishedProducts';
import {logoutMe} from '../../Actions/LoginActions';
import Footer from '../Footer/Footer';
class Home extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <div  id="wrap" >
                    <Tabs defaultActiveKey="Raw_Materials" id="uncontrolled-tab-example">
                        <Tab eventKey="Raw_Materials" title="Raw Materials" >
                            <br/>
                            <RawMaterials/>
                        </Tab>
                        <Tab eventKey="Finished_Products" title="Finished Products">
                            <br/>
                            <FinishedProducts/>
                        </Tab>
                    </Tabs>
                </div>
                <Footer/>
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
