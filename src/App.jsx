import { useState } from 'react'
import './App.css'
import PersonalDetailsInputs from './Personaldetails.jsx'

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


  //change function for states
  //using a single state and a single state changer function for multiple components.
  //see: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  function personalDetailChange (event){
    const value = event.target.value;
    setPersonalDetail({
      ...personalDetailValue,
      [event.target.name]: value
    });
  }



  return (
    <div id ="app">
      <div id="personalDetails">

      <PersonalDetailsInputs.NameInput value={personalDetailValue.name} onChange = {personalDetailChange} /> 
      <br /><br />
      <PersonalDetailsInputs.EmailInput value={personalDetailValue.email} onChange = {personalDetailChange} /> 
      <br /><br />
       <PersonalDetailsInputs.PhoneInput value={personalDetailValue.phone} onChange = {personalDetailChange} />
      <br /><br />
      <PersonalDetailsInputs.AddressInput value={personalDetailValue.address} onChange = {personalDetailChange} /> 
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