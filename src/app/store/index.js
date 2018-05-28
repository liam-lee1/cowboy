import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'react-redux';
import RootReducer from '../reducer/index'
const store = createStore(RootReducer, applyMiddleware(ReduxThunk));
export default store