function ExperienceInputs ({onChange, onSubmit, company, title, startDate, endDate, location, description}) {

    return (

    <form onSubmit={onSubmit}>
            <label>Company Name </label>
            <br />
            <input
                className="form-control"
                placeholder="Company Name"
                type="text"
                name="company"
                value={company}
                onChange={onChange}
            />
            <br /><br />
            <label>Position Title</label>
            <br />
            <input
                className="form-control"
                placeholder="Position Title"
                type="text"
                name="title"
                value={title}
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
            <label>Description</label>
            <br />
            <input
                className="form-control"
                placeholder="Description"
                type="text"
                name="description"
                value={description}
                onChange={onChange}
            />
            <br /><br />
            <input type="submit" value="Submit" />
        
    </form>

)}

export default ExperienceInputs;