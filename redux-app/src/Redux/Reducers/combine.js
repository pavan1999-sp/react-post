
import { combineReducers } from 'redux';
import { PeopleReducer} from './reducers'

export const appstate= combineReducers({
    peoplevalues:PeopleReducer
})