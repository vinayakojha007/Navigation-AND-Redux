import {ADD_ITEM} from '../actions'

export const LikeReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
