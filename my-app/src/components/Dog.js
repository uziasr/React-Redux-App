import React from 'react'

const Dog = (props) =>{
    const dogBreed = props.dog.split('/')[4].split('-').join(' ')

    return(
        <>
            <h2>{dogBreed}</h2>
            <img src={props.dog}/>
        </>

    )
}
export default Dog