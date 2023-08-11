function EducationInputs ({onChange, onSubmit, degree, school, startDate, endDate, location}) {
    return (
    <form onsubmit={onSubmit}>
        <h2>Education</h2>
            <label>Degree </label>
            <br />
            <input
                type="text"
                name="degree"
                value={degree}
                onChange={onChange}
            />
            <br /><br />
            <label>School</label>
            <br />
            <input
                type="text"
                name="school"
                value={school}
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
            <input type="submit" value="Submit" />
    </form>
        
    )
}

export default EducationInputs