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

  //a state for the education info user provides
  const [educationLines, changeEducationLines] = useState([]);

  //open-close education tab
  const [tabActive, setActive] = useState(0);

  function tabToggle(index){
    //if activeTab = 0, none of them are open, if 1, education open. if 2, experience open
    setActive(index)
    //if the user clicked on the same tab twice (education, experience), close the tab
    if (index === tabActive){
      setActive(0)
    }
  }


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

  function selectEducation (schoolName){
    const selectedEducation = educationLines.find((element) => element.school === schoolName);
    //change the educationValue state, which dictates what's being displayed on the form
    setEducation(selectedEducation)  
  }

  function educationFormSubmit (event){
    event.preventDefault()

    //create an object with the submitted data
    const myObject = {}
    myObject.degree = event.target.degree.value
    myObject.school = event.target.school.value
    myObject.startDate = event.target.startDate.value
    myObject.endDate = event.target.endDate.value
    myObject.location = event.target.location.value

    //check if the added school already exists in the array
    var addedSchoolName = educationLines.find((element) => element.school === event.target.school.value);
    //if it exists, update the existing data
    if (addedSchoolName){
      //create a copy of the existing state 
      const updatedEducationList = [...educationLines];
      //find the same element
      let addedSchool = updatedEducationList.find((element) => element.school === event.target.school.value);
      //update this element
      addedSchool.degree = event.target.degree.value
      addedSchool.school = event.target.school.value
      addedSchool.startDate = event.target.startDate.value
      addedSchool.endDate = event.target.endDate.value
      addedSchool.location = event.target.location.value
      //change the current state with the updated state
      changeEducationLines(updatedEducationList)
    }
    else{
    //if the submitted data does not exist, add it to the array of education lines
    //add the object to the array
    changeEducationLines(educationLines.concat(myObject))
    }
  }

  function deleteEducation (schoolName){
    //find the element with the clicked school name
    const clickedSchool = educationLines.find((element) => element.school === schoolName); 
    //remove it from the array (educationLines state, which is an array)
    changeEducationLines(educationLines.filter(element => element !== clickedSchool)
    )
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
        {/* toggle isActive boolean on click */} 
        <h2 onClick ={() =>tabToggle(1)} >Education</h2>

        {tabActive ===1 && /* showing this part only if isActive is true */
        /* react expects a single child within the ornary (if) operator, so we are wrapping this up with a div */
          <div>
          {/* show the list of education lines that have been added by the user */}
          {educationLines.map(education => 
          <li className='educationLinesLi'
          onClick = {() => selectEducation(education.school)} 
          key={education.school}>
          <h3>{education.school}</h3>
          {/* delete button */}
          <button onClick = {() => deleteEducation(education.school)}>X</button>
          </li>
          )}
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
         }
      </div>
      <div id="experienceInput">
        {/* toggle isActive boolean on click */} 
        <h2 onClick ={() =>tabToggle(2)} >Experience</h2>

        {tabActive ===2 &&/* This is an inline if operator: https://legacy.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
        showing this part only if tabActive is 2 */
        /* react expects a single child within the ornary (if) operator, so we are wrapping this up with a div */
          <div>
          {/* show the list of education lines that have been added by the user */}
          {educationLines.map(education => 
          <li className='educationLinesLi'
          onClick = {() => selectEducation(education.school)} 
          key={education.school}>
          <h3>{education.school}</h3>
          {/* delete button */}
          <button onClick = {() => deleteEducation(education.school)}>X</button>
          </li>
          )}
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
         }
      </div>
      <div id="personalDetailsDisplay">
          <h1>{personalDetailValue.name}</h1>
          <h3>{personalDetailValue.email}</h3>
          <h3>{personalDetailValue.phone}</h3>
          <h3>{personalDetailValue.address}</h3> 
      </div> 

      <div id="educationDisplay">
        <ul id="educationDisplayList">
          {educationLines.map(education => 
          <li key={education.school}>
            {education.degree}, {education.school}
            <br />
            {education.startDate}-{education.endDate}
            <br />
            {education.location}
            <br />
          </li>
          )}
        </ul>
      </div> 


       
    </div>
  )
} 



export default App