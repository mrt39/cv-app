import { useState } from 'react'
import './App.css'
import PersonalDetailsInputs from './Personaldetails.jsx'
import EducationInput from './Educationinput.jsx'

function App() {
  //setting up states
  //using a single state and a single state changer function for multiple components.
  //see: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  const [personalDetailValue, setPersonalDetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationValue, setEducation] = useState({
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
    location: "",
  });


  //change function for states
  //using a single state and a single state changer function for multiple components.
  //see: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  function personalDetailChange (event){
    const value = event.target.value;
    setPersonalDetail({
      ...personalDetailValue,
      //name for each input field is written on html, in Personaldetails.jsx
      [event.target.name]: value
    });
  }

  function educationChange (event){
    const value = event.target.value;
    setEducation({
      ...educationValue,
      [event.target.name]: value
    });
  }



  function educationFormSubmit (event){
    //prevent default
    //append it to a variable
  }


  return (
    <div id ="app">
      <div id="personalDetailsInput">
      <PersonalDetailsInputs 
        name = {personalDetailValue.name}
        email = {personalDetailValue.email}
        phone = {personalDetailValue.phone}
        address = {personalDetailValue.address}
        onChange = {personalDetailChange} /> 
      <br /><br />
      </div>
      <div id="educationInput">
      <EducationInput 
        degree = {educationValue.degree}
        school = {educationValue.school}
        startDate = {educationValue.startDate}
        endDate = {educationValue.endDate}
        location =  {educationValue.location}
        onChange = {educationChange} 
        onSubmit = {educationFormSubmit} 
        /> 
      </div>

      <div id="personalDetailsDisplay">
          <h1>{personalDetailValue.name}</h1>
          <h3>{personalDetailValue.email}</h3>
          <h3>{personalDetailValue.phone}</h3>
          <h3>{personalDetailValue.address}</h3> 
      </div> 

       
      </div>
  )
} 



export default App