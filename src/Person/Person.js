import React from 'react'
import './Person.css';

const person = (props) =>{
	const Input = ({value, onChange, type = 'text'}) =>
  	<input type={type} value={value} onChange={e => onChange(e.target.value)} />
 
	return(
	<div className="Person">
	<p  > Hi , I am a {props.name} and my age is {props.age}  </p>
	 
	</div>
	)
}

export  default person