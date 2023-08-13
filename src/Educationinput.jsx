function EducationInputs ({onChange, onSubmit, degree, school, startDate, endDate, location}) {

    return (

    <form onSubmit={onSubmit}>
            <label>Degree </label>
            <br />
            <input
                className="form-control"
                placeholder="Degree/Field of Study"
                type="text"
                name="degree"
                value={degree}
                onChange={onChange}
            />
            <br /><br />
            <label>School</label>
            <br />
            <input
                className="form-control"
                placeholder="School/University"
                type="text"
                name="school"
                value={school}
                onChange={onChange}
            />
            <br /><br />
            <label>Start Date</label>
            <br />
            <input
                className="form-control"
                placeholder="Start Date"
                type="text"
                name="startDate"
                value={startDate}
                onChange={onChange}
            />
            <br /><br />
            <label>End Date</label>
            <br />
            <input
                className="form-control"
                placeholder="End Date"
                type="text"
                name="endDate"
                value={endDate}
                onChange={onChange}
            />
            <br /><br />
            <label>Location</label>
            <br />
            <input
                className="form-control"
                placeholder="City, Country"
                type="text"
                name="location"
                value={location}
                onChange={onChange}
            />
            <br /><br />
            <input type="submit" value="Submit" />
        
    </form>

)}

export default EducationInputs;