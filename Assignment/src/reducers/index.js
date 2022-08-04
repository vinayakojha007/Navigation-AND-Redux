import { combineReducers } from 'redux';
import BollywoodReducer from './BollywoodReducer';
import HollywoodReducer from './HollywoodReducer';
import { LikeReducers } from './Like_Movies';
const rootReducer = combineReducers({
    BollywoodReducer,
    HollywoodReducer,
    LikeReducers,
})

export default rootReducer;

/*

Create a rootreducer containing all the reducers, in this case it contains the single property bookreducer

*/ 