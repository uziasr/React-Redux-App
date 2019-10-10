import React from 'react'

const Dog = (props) =>{
    console.log(props)
    return(
        <img src={props.dog}/>
    )
}
export default Dog