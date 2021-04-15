import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../components/header/store';
import { reducer as newsReducer } from '../pages/News/store';
import { reducer as homeReducer } from '../pages/Home/store';

const reducer = combineReducers({
    header: headerReducer,
    news: newsReducer,
    home: homeReducer 
})

export default reducer;