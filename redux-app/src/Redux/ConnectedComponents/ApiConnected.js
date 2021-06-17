import Title from '../../Components/Title'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import {  postupdate } from '../Actions/TitleActions'

const stateToProps =(store)=>{
    return {titleData: store.peoplevalues.titleData}
}

const actionToProps = (dispatch)=>{
    return bindActionCreators({postdata: postupdate},dispatch)
}

export const postupdateHOc = connect(stateToProps,actionToProps)(Title)