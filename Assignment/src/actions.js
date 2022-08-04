export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const HOLLY_WOOD= 'HOLLY_WOOD';
export const ADD_ITEM = 'ADD_ITEM';



export function loadProduct(bollywood) { // add book 
    return {
        type: LOAD_PRODUCTS,
        bollywood: {
            ...bollywood,
        }
    }
}

export function hollywood(hollywood) { // add book 
    return {
        type: HOLLY_WOOD,
        hollywood: {
            ...hollywood,
        }
    }
}

export const addItemToLikes = data => ({
    type: ADD_ITEM,
    payload: data,
  });
  
  
  