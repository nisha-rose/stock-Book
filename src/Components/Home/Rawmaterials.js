import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import AllFilters from '../Table/TableComponent';
import { getRawmaterialsState } from '../../Reducers/StockReducer';
import { getRawMaterials, addNewRawMaterial, addNewRawMaterialSucess, fetchRawMaterials, updateCell, deleteRow} from '../../Actions/HomeActios';
import { InsertButton } from 'react-bootstrap-table';
import {  Form} from 'react-bootstrap';

class RawMaterials extends React.Component {
    constructor(){
        super();
        this.state ={
            isLoading: true,
            error:'',
            show: false,
            materialName:'',
            quantity:''
        }
    }

    componentDidMount() {
        this.props.fetchRawMaterials();
        this.props.rawMaterials? this.setState({isLoading: false}): this.setState({isLoading: true})
    }

    handleClose = () =>{
        this.setState({show:false})
    }

    handleOpen =()=>{
        this.setState({show:true})
    }

    handleInputChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit =(e) =>{
        console.log(this.state.materialName, this.state.quantity);
        let data = {
            id: (this.props.rawMaterials.length+1).toString(),
            materialName: this.state.materialName,
            quantity: this.state.quantity
        };
        this.props.addNewRawMaterial(data);
        this.props.fetchRawMaterials();
        this.setState({show:false});
    }
    handlerClickCleanFiltered() {
        this.refs.name1.cleanFiltered();
        this.refs.quantity.cleanFiltered();
      };

    handleEdit = (rowdata)=>{
        this.props.updateCell(rowdata);
        // let rawMaterials = this.props.rawMaterials;
        // rawMaterials.forEach((item)=>{
        //     if(item.id ===rowdata.id && (item.materialName!= rowdata.materialName ||item.quantity!=rowdata.quantity)){
        //         this.props.updateCell(rowdata);
        //     }
        // })
    }

    deleteRow =(rowId)=>{
        rowId.forEach((rowId)=> { this.props.deleteRow(rowId);} )
    }

    render(){
        if(this.state.isLoading) {
            return "Loading..."
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }
        return (<React.Fragment>
                    {/* <InsertButton onClick={this.handleOpen}>Add new material</InsertButton> */}

                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        backdrop="static"
                        centered
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Add New Raw Material</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form horizontal="true" onSubmit={this.handleSubmit}>
                                <Form.Group >
                                    <Form.Label>Material name</Form.Label>
                                    <Form.Control type="text" value={this.state.materialName} onChange={this.handleInputChange} name="materialName" 
                                    placeholder="Enter material name" required />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control id="quantity" type="number"  value={this.state.quantity} 
                                    onChange={this.handleInputChange} name="quantity" placeholder="" required/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                    <AllFilters data={this.props.rawMaterials} edit={this.handleEdit} deleteRow={this.deleteRow} addRow={this.handleOpen}/>
            </React.Fragment>)  
    }
}

const mapStateToProps = (state) => {
    return {
      authState: state.login.isAuthed,
      username: state.login.username,
      rawMaterials: getRawmaterialsState(state)
    }
  };
  
const mapDispatchToProps = (dispatch) => {
    return{
        getRawMaterials: (value) =>dispatch(getRawMaterials(value)),
        addNewRawMaterial: (data) =>dispatch(addNewRawMaterial(data)),
        addNewRawMaterialSucess: (data) =>dispatch(addNewRawMaterialSucess(data)),
        fetchRawMaterials: () => dispatch(fetchRawMaterials()),
        updateCell: (data)=> dispatch(updateCell(data)),
        deleteRow:(rowId)=> dispatch(deleteRow(rowId))      

    }
};
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RawMaterials));
