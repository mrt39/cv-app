
function NameInput({value, onChange}) {

    return (
        <>
        <label>Full Name </label>
        <br />
          <input
            type="text"
            name="name"
            value={value}
            onChange={onChange}
          />
        </>
    )
}


function EmailInput({value, onChange}) {

    return (
        <>
        <label>E-mail</label>
        <br />
          <input
            type="email"
            name="email"
            value={value}
            onChange={onChange}
          />
        </>
    )
}

function PhoneInput({value, onChange}) {

    return (
        <>
        <label>Phone Number</label>
        <br />
          <input
            type="tel"
            name="phone"
            value={value}
            onChange={onChange}
          />
        </>
    )
}

function AddressInput({value, onChange}) {

    return (
        <>
        <label>Address</label>
        <br />
          <input
            type="tel"
            name="address"
            value={value}
            onChange={onChange}
          />
        </>
    )
}

export default {NameInput, EmailInput, PhoneInput, AddressInput}