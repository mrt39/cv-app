import { useState } from 'react'
import './App.css'
import PersonalDetailsInputs from './Personaldetails.jsx'
import EducationInput from './Educationinput.jsx'
import ExperienceInput from './Experienceinput.jsx'

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

  const [experienceValue, setExperience] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  //a state for the education info user provides
  const [educationLines, changeEducationLines] = useState([]);

  //a state for the experience info user provides
  const [experienceLines, changeExperienceLines] = useState([]);



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

  function experienceChange (event){
    const value = event.target.value;
    setExperience({
      ...experienceValue,
      [event.target.name]: value
    });
  }

  function selectEducation (schoolName){
    const selectedEducation = educationLines.find((element) => element.school === schoolName);
    //change the educationValue state, which dictates what's being displayed on the form
    setEducation(selectedEducation)  
  }

  function selectExperience (companyName){
    const selectedExperience = experienceLines.find((element) => element.company === companyName);
    //change the experienceValue state, which dictates what's being displayed on the form
    setExperience(selectedExperience)  
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

  function experienceFormSubmit (event){
    event.preventDefault()

    //create an object with the submitted data
    const myObject = {}
    myObject.company = event.target.company.value
    myObject.title = event.target.title.value
    myObject.startDate = event.target.startDate.value
    myObject.endDate = event.target.endDate.value
    myObject.location = event.target.location.value
    myObject.description = event.target.description.value

    //check if the added school already exists in the array
    var addedExperienceName = experienceLines.find((element) => element.company === event.target.company.value);
    //if it exists, update the existing data
    if (addedExperienceName){
      //create a copy of the existing state 
      const updatedExperienceList = [...experienceLines];
      //find the same element
      let addedExperience = updatedExperienceList.find((element) => element.company === event.target.company.value);
      //update this element
      addedExperience.company = event.target.company.value
      addedExperience.title = event.target.title.value
      addedExperience.startDate = event.target.startDate.value
      addedExperience.endDate = event.target.endDate.value
      addedExperience.location = event.target.location.value
      addedExperience.description = event.target.description.value
      //change the current state with the updated state
      changeExperienceLines(updatedExperienceList)
    }
    else{
    //if the submitted data does not exist, add it to the array of education lines
    //add the object to the array
    changeExperienceLines(experienceLines.concat(myObject))
    }
  }

  function deleteEducation (schoolName){
    //find the element with the clicked school name
    const clickedSchool = educationLines.find((element) => element.school === schoolName); 
    //remove it from the array (educationLines state, which is an array)
    changeEducationLines(educationLines.filter(element => element !== clickedSchool)
    )
  }

  function deleteExperience (companyName){
    //find the element with the clicked school name
    const clickedExperience = experienceLines.find((element) => element.company === companyName); 
    //remove it from the array (educationLines state, which is an array)
    changeExperienceLines(experienceLines.filter(element => element !== clickedExperience)
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
        {/* collapsible dropdown button taken from bootstrap - sidebars */}
        <button 
        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" 
        data-bs-toggle="collapse" 
        data-bs-target="#education-collapse" 
        aria-expanded="false">
        <h3>Education</h3>
        </button>
        <div className="collapse" id="education-collapse"> 
          <div>
          {/* show the list of education lines that have been added by the user */}
          {educationLines.map(education => 
          <li className='educationLinesLi'
          onClick = {() => selectEducation(education.school)} 
          key={education.school}>
          <h5>{education.school}</h5>
          {/* delete button */}
          <div className="deleteBtnContainer">
            <i onClick = {() => deleteEducation(education.school)}
            className="fa fa-trash"></i>
          </div>
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
         </div>
        
      </div>

      <div id="experienceInput">
        {/* collapsible dropdown button taken from bootstrap - sidebars */}
        <button 
        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" 
        data-bs-toggle="collapse" 
        data-bs-target="#experience-collapse" 
        aria-expanded="false">
        <h3>Experience</h3>
        </button>
        <div className="collapse" id="experience-collapse"> 
          <div>
          {/* show the list of education lines that have been added by the user */}
          {experienceLines.map(experience => 
          <li className='experienceLinesLi'
          onClick = {() => selectExperience(experience.company)} 
          key={experience.company}>
          <h5>{experience.company}</h5>
          {/* delete button */}
          <div className="deleteBtnContainer">
            <i onClick = {() => deleteExperience(experience.company)}
            className="fa fa-trash"></i>
          </div>
          </li>
          )}
          <ExperienceInput 
            company = {experienceValue.company}
            title = {experienceValue.title}
            startDate = {experienceValue.startDate}
            endDate = {experienceValue.endDate}
            location =  {experienceValue.location}
            description =  {experienceValue.description}
            onChange = {experienceChange} 
            onSubmit = {experienceFormSubmit} 
            /> 
            </div>
         </div>
      </div>

      {/* CV DISPLAY PAGE */}
      <div id="displayContainer">
      <div id="personalDetailsDisplay">
          <h1>{personalDetailValue.name}</h1>
          <div id="personalDetailContainer">
            <p className='personalDetailText'>
              {personalDetailValue.email ? (
              <i className="fa-solid fa-envelope"></i>
              ): ("")}
              {personalDetailValue.email}
            </p>
            <p className='personalDetailText'>
              {personalDetailValue.phone ? (
              <i className="fa-solid fa-phone"></i>
              ): ("")}
              {personalDetailValue.phone}
            </p>
            <p className='personalDetailText'>
              {personalDetailValue.address ? (
              <i className="fa-solid fa-location-dot"></i>
              ): ("")}
              {personalDetailValue.address}
            </p> 
          </div>
      </div> 

      <div id="educationDisplay">
        {educationLines.length > 0 && 
          <div className='cvStrip'>
            <p className='stripText'>Education</p>
          </div>
        }
        <ul id="educationDisplayList">
          {educationLines.map(education => 
          <li key={education.school}>
            <div className='displayLineBigContainer'>
              <div className='displayLineFirstContainer'>
              <p className="topPara">{education.startDate}-{education.endDate}</p>
              <p>{education.location}</p>
              </div>
              <div className='displayLineSecondContainer'>
              <p className="topPara"><b>{education.school}</b></p>
              <p>{education.degree}</p> 
              </div>
            </div>
          </li>
          )}
        </ul>
      </div> 

      <div id="experienceDisplay">
        {experienceLines.length > 0 && 
            <div className='cvStrip'>
              <p className='stripText'>Experience</p>
            </div>
        }
        <ul id="experienceDisplayList">
          {experienceLines.map(experience => 
          <li key={experience.company}>
            <div className='displayLineBigContainer'>
              <div className='displayLineFirstContainer'> 
                <p className="topPara">{experience.startDate}-{experience.endDate}</p>
                <p>{experience.location}</p>
              </div>
              <div className='displayLineSecondContainer'> 
              <p className="topPara"><b>{experience.company}</b></p>
              <p className="topPara">{experience.title}</p>
              <p>{experience.description}</p>
              </div>
            </div>
          </li>
          )}
        </ul>
      </div> 
      </div>


       
    </div>
  )
} 



export default App