import { createAction } from 'redux-actions';
import axios from 'axios';

export const getRawMaterials = createAction('GETRAWMATERIALS');
export const getFinishedProducts = createAction('GET_FINISHED_PRODUCTS');
export const addNewRawMaterialSucess = createAction('ADD_NEW_RAW_MATERIALS_SUCESS');
export const updatecell = createAction('UPDATE_CELL_SUCESS');



export function addNewRawMaterial(data){
    return dispatch => {
      axios('http://localhost:4000/rawMaterials/',{
        method: 'POST',
        crossdomain: true,
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          // dispatch(addNewRawMaterialSucess(res.data)); 
          dispatch(fetchRawMaterials());        
          })
        .catch((error) =>{
            console.log(error);
        })
    }
  }

  export function fetchRawMaterials(){
    return dispatch => {
    axios.get('http://localhost:4000/rawMaterials')
        .then((res) => {
          let value = res.data;
          dispatch(getRawMaterials(value));
          })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
  }


  export function updateCell(rowData){
    return dispatch => {
    axios.put(`http://localhost:4000/rawMaterials/${rowData.id}`, rowData)
    .then(res => {
      console.log(res);
      dispatch(fetchRawMaterials());
    })
    .catch(err => console.log(err));
    }
}

export function deleteRow(rowId){
  return dispatch => {
  axios.delete(`http://localhost:4000/rawMaterials/${rowId}`)
  .then(res => {
    console.log(res);
    dispatch(fetchRawMaterials());
  })
  .catch(err => console.log(err));
  }
}