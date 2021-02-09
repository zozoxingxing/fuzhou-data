import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../components/header/store';
import { reducer as newsReducer } from '../pages/News/store';

const reducer = combineReducers({
    header: headerReducer,
    news: newsReducer 
})

export default reducer;