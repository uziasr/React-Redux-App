import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchDogs} from '../actions'
import Dog from './Dog'

const RandomDogs = props =>{
    useEffect(()=>{
        props.fetchDogs();
        console.log('hellofads',props)
    },[])

    if(props.isFetching){
        return <h2>Loading the good boy....please wait</h2>
    }
    return(
        <div>
      {props.error && <p>{props.error}</p>}
      {props.randomDog.map(dog => (
        <Dog key={Date.now} dog={dog} />
      ))}
    </div>
    )

}

const mapStateToProps = (state)=>{
   return {
       randomDog:state.randomDog,
       isFetching: state.isFetching,
       error:state.error
    }
}

export default connect(mapStateToProps,{fetchDogs})(RandomDogs)