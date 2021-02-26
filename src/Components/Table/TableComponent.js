import React from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton,  ExportCSVButton } from "react-bootstrap-table";

class AllFilters extends React.Component {
    columns = [{
        dataField: 'id',
        text: 'Product ID'
    }, 
    {
        dataField: 'materialName',
        text: 'Material Name'
    },
    {
      dataField: 'quantity',
      text: 'Quantity'
    }];
    handlerClickCleanFiltered() {
      this.refs.name1.cleanFiltered();
      this.refs.quantity.cleanFiltered();
    };
    handleEdit =(rowdata)=>{
      console.log(rowdata);
      this.props.edit(rowdata);
    }

    onAfterDeleteRow =(rowId)=>{
      console.log(rowId);
      if(rowId){
        this.props.deleteRow(rowId);
      }
    }
    createCustomInsertButton = (onClick) => {
      return (
        <InsertButton
          btnText='Add new Raw material'
          className='table-edit-btn'
          onClick={ () => this.props.addRow() }/>
      );
    }

    createCustomDeleteButton = (onClick) => {
      return (
        <DeleteButton 
          btnText='Delete'
          btnContextual='btn-danger'
          className='table-edit-btn'
          />
      );
    }
    createCustomExportCSVButton = (onClick) => {
      return (
        <ExportCSVButton className='table-edit-btn'/>
      );
    }
    render() {
      const cellEditProp = {
        mode: 'click',
        blurToSave: true,
        afterSaveCell: this.handleEdit
      };
      const options ={
        sizePerPage: 5,
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text,
        hideSizePerPage: true,
        onDeleteRow: this.onAfterDeleteRow,
        insertBtn: this.createCustomInsertButton,
        deleteBtn: this.createCustomDeleteButton,
        exportCSVBtn: this.createCustomExportCSVButton
        
      };
      return (
        <BootstrapTable ref='table' data={ this.props.data } cellEdit={ cellEditProp } containerStyle={ { margin: '0px 20px 0px 20px' } }
        tableStyle={ { height:'400px'  } } headerStyle={ { background: '#2196f3'} } tableHeaderClass= 'table-header-container'
        selectRow={ {mode: 'checkbox'} } deleteRow insertRow exportCSV csvFileName='raw-materials-table-export'
        striped hover pagination options={ options }>
          <TableHeaderColumn dataField='id' isKey width="170">
            Product ID
            <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer', color: '#87f88a'} }>clear filters</a>
          </TableHeaderColumn>
          <TableHeaderColumn ref='name1' dataField='materialName' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Material Name</TableHeaderColumn>
          <TableHeaderColumn ref='quantity' dataField='quantity' width="170" 
          editorRenderer={(editorProps, value, row, column, rowIndex, columnIndex) => (
            console.log(row)
          )} >Quantity</TableHeaderColumn>
        </BootstrapTable>
      );
    }
}

export default AllFilters;