import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchDogs} from '../actions'
import Dog from './Dog'
import styled from 'styled-components'

const Card = styled.div`
display:flex;
margin: 1% 0;
flex-direction: column;
justify-content: center;
align-content:center;
align-items:center;
img{
    height: 70vh;
    width:30%;
    border-radius: 5px;
}
button{
    padding: 15px;
    background-color:lightblue;
    font-weight: 700;
    border-radius: 5px;
    margin-top:3%;

}
`

const RandomDogs = props =>{
    useEffect(()=>{
        props.fetchDogs();
    },[])

    if(props.isFetching){
        return <h2>Loading the good boy....please wait</h2>
    }
    return(
        <Card>
      {props.error && <p>{props.error}</p>}
      {props.randomDog.map(dog => (
        <Dog key={Date.now} dog={dog} />
      ))}
      <button onClick={(e)=> {
          e.preventDefault()
          props.fetchDogs()}
          }>New Dog!</button>
    </Card>
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