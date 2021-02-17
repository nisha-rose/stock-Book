import React from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

  
  class AllFilters extends React.Component {
    
    handlerClickCleanFiltered() {
      this.refs.name1.cleanFiltered();
      this.refs.quantity.cleanFiltered();
    }
    
    render() {
      return (
        <BootstrapTable ref='table' data={ this.props.data }>
          <TableHeaderColumn dataField='id' isKey width="170">
            Product ID
            <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer', color: 'green'} }>clear filters</a>
          </TableHeaderColumn>
          <TableHeaderColumn ref='name1' dataField='materialName' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Material Name</TableHeaderColumn>
          <TableHeaderColumn ref='quantity' dataField='quantity' width="170" >Quantity</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

export default AllFilters;