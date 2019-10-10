import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchDogs} from '../actions'
import Dog from './Dog'

const RandomDogs = props =>{

}

const mapStateToProps = (state)=>{
   return {
       randomDog:state.randomDog,
       isFetching: state.isFetching,
       error:state.error
    }
}

export default connect(mapStateToProps,{})(RandomDogs)