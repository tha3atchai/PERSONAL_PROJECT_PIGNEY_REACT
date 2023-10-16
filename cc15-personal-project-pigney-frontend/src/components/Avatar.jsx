import React from 'react'
import defaultImage from "../assets/blank.png";

function Avatar({w = "10", rounded = "full",  src}) {
    const classes = `rounded-${rounded} aspect-square w-${w}` ;
  return (
    <>
        <img src={src || defaultImage} alt="user" className={classes} /> 
    </>
  )
}

export default Avatar