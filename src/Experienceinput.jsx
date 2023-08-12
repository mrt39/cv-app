function ExperienceInputs ({onChange, onSubmit, company, title, startDate, endDate, location, description}) {

    return (

    <form onSubmit={onSubmit}>
            <label>Company Name </label>
            <br />
            <input
                type="text"
                name="degree"
                value={company}
                onChange={onChange}
            />
            <br /><br />
            <label>Position Title</label>
            <br />
            <input
                type="text"
                name="school"
                value={title}
                onChange={onChange}
            />
            <br /><br />
            <label>Start Date</label>
            <br />
            <input
                type="text"
                name="startDate"
                value={startDate}
                onChange={onChange}
            />
            <br /><br />
            <label>End Date</label>
            <br />
            <input
                type="text"
                name="endDate"
                value={endDate}
                onChange={onChange}
            />
            <br /><br />
            <label>Location</label>
            <br />
            <input
                type="text"
                name="location"
                value={location}
                onChange={onChange}
            />
            <br /><br />
            <label>Description</label>
            <br />
            <input
                type="text"
                name="location"
                value={description}
                onChange={onChange}
            />
            <br /><br />
            <input type="submit" value="Submit" />
        
    </form>

)}

export default ExperienceInputs;