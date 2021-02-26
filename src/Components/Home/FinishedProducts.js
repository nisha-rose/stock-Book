import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import AllFilters from '../Table/TableComponent';
import { getFinishedProducts} from '../../Actions/HomeActios';

class FinishedProducts extends React.Component {
    constructor(){
        super();
        this.state ={
            isLoading: true,
            error:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/finishedProducts')
        .then((res) => {
          let value = res.data;
          this.props.getFinishedProducts(value);
          this.setState({isLoading: false})
          })
        .catch(error => {
            console.error('There was an error!', error);
            this.setState({isLoading: false})
            this.setState({error: error});
        });
    
    }

    render(){
        if(this.state.isLoading) {
            return "Loading..."
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }
        return (<React.Fragment>
                    <AllFilters data={this.props.finishedProducts}/>
            </React.Fragment>)  
    }
}

const mapStateToProps = (state) => {
    return {
      authState: state.login.isAuthed,
      username: state.login.username,
      finishedProducts: state.stock.finishedProducts
    }
  };
  
const mapDispatchToProps = (dispatch) => {
    return{
        getFinishedProducts: (value) =>dispatch(getFinishedProducts(value))
    }
};
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FinishedProducts));
