import axios from 'axios';
import {call,put} from 'redux-saga/effects'

function getCaller(url){
    return axios.get(url);
}

function doPost(url,data){
    return axios.post(url,data);
}

export function* handlePeople(){
      let   response = yield call(getCaller," http://localhost:9090/blogdata")
      yield put({type:'POST_DATA',records:response.data});

}

export function* addData(action){
    let titleData=action.data;
    let response = yield call(doPost," http://localhost:9090/blogdata",titleData);
    yield handlePeople();
      
}