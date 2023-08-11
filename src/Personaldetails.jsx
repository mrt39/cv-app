function PersonalDetailsInputs ({onChange, name, email, phone, address}) {
    return (
    <>
    <h2>Personal Details</h2>
        <label>Full Name </label>
        <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        <br /><br />
        <label>E-mail</label>
        <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        <br /><br />
        <label>Phone Number</label>
        <br />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        <br /><br />
        <label>Address</label>
        <br />
          <input
            type="tel"
            name="address"
            value={address}
            onChange={onChange}
          />
    </>
        
    )
}

export default PersonalDetailsInputs