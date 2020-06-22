const ADD_PRODUCT = 'ADD_PRODUCT';
let products = {
       phone: [
         { id: 1, name: "Huawei" },
         { id: 2, name: "Honor" },
         { id: 3, name: "Xiaomi" },
       ],
};
export const productReducer = (stateProducts = products, action) => {
   
   switch(action.type){
      case ADD_PRODUCT: stateProducts.setText = action.text; return stateProducts;
      
      default: return stateProducts; 
      
    }
}

export const inProductsAction = (text) => ({type: ADD_PRODUCT, text})

