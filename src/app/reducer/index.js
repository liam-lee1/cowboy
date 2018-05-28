import {combileReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import appReducer from 'app-reducer'
const RootReducer = combileReducers({
    routing : routerReducer,
    app: appReducer
});

export default Rootreducer;