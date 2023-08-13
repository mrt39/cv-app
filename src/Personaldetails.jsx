function PersonalDetailsInputs ({onChange, name, email, phone, address}) {
    return (
    <>
    <h3>Personal Details</h3>
        <label>Full Name </label>
        <br />
          <input 
            className="form-control"
            placeholder="Full Name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        <br /><br />
        <label>E-mail</label>
        <br />
          <input
            className="form-control"
            placeholder="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        <br /><br />
        <label>Phone Number</label>
        <br />
          <input
            className="form-control"
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        <br /><br />
        <label>Address</label>
        <br />
          <input
            className="form-control"
            placeholder="City, Country"
            type="tel"
            name="address"
            value={address}
            onChange={onChange}
          />
    </>
        
    )
}

export default PersonalDetailsInputs