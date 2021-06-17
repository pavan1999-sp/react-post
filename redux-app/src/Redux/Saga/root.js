import { takeEvery,call,put} from 'redux-saga/effects';
import { addData, handlePeople } from './sagaactions';

export  function* rootSaga(){
    yield takeEvery("SEND_DATA",handlePeople);
    yield takeEvery("ADD_BLOG",addData);
}

