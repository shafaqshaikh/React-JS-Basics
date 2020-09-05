import React  , { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App=()=> {

  const [person , setPerson] = useState({
    persons:[
    {name : 'shafaq' , age:22},
    {name: 'arru' , age:21},
    {name : 'marry' , age:21},
    {name : 'altu', age:21},
    {name : 'gazzo', age:21},
    {name : 'fahm',age:21},
    {name : 'saffu',age:21}
    ]

    
  })
  const deleteHandler =  (personIndex)=>{
    const persons = person.persons
    persons.splice(personIndex , 1)
    setPerson({person : persons})

  }
  
  return(
  <div>
  {person.persons.map((person , index)=>{
    return <Person 
    
    name={person.name} 
    age={person.age}
    key = {index}
    click={()=>deleteHandler(index)}
    />

  })}
  <button onClick={deleteHandler}>Delete Person</button>

  </div>
  
    )
  }
 
export default App;
