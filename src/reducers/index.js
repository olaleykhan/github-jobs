import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import authReducer from './authReducer';

import jobDataReducer from './jobDataReducer';


export default combineReducers({
   form : formReducer,
   jobsData: jobDataReducer,
});