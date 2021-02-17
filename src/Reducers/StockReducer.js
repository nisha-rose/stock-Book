const initialState ={};

const  StockReducert = (state=initialState, action) => {
    switch(action.type){
        case 'GETRAWMATERIALS':
            return {...state,...action.payload}
        default:
            return state;
    }
}

export default StockReducert;