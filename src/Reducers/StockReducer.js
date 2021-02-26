const initialState ={};

const  StockReducert = (state=initialState, action) => {
    switch(action.type){
        case 'GETRAWMATERIALS':
            return {...state, materials:action.payload};
        case 'GET_FINISHED_PRODUCTS':
            return{...state,finishedProducts:action.payload};
        // case 'ADD_NEW_RAW_MATERIALS_SUCESS':
        //     let materialsArr= state.materials;
        //     materialsArr.push(action.payload);
        //     // $('#displaytable').bootstrapTable('load', materialsArr);
        //     return{...state,materials:materialsArr}
        default:
            return state;
    }
}
export const getRawmaterialsState = state => state.stock.materials? state.stock.materials: [];

export default StockReducert;

