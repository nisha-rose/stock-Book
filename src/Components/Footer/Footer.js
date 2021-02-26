import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
    
    render(){
        return (
            // <footer  className="footer" >copyright@nisha-rose</footer> 

        <footer className="footer" id="footer">
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                <center><p>Copyright @ nisha rose</p></center>
                </div>
                <div className="col-sm-4" style={{ "textAlign": 'right' }}>
                </div>
            </div>
            </div>
        </footer>
        )
    }
}

  
export default Footer;
