import React from 'react'
import classes from './title.module.css'
const Title = ({title,fontSize,margin}) => {
  return (
    <h1 style={{fontSize,margin,color:'#616161'}} >{title}</h1>
  )
}

export default Title