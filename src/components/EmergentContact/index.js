import React from 'react';
 

class EmergentContact extends React.Component {
  state = {
    firstName: "",
    middleName: "",
    lastName: "",
    mailId: "",
    age: "",
    genderIdentify: "",
    race: "",
    phoneNum: "",
    department: "",
    jobTitle: "",
    reportingManager: "",
    branch: "",
    role: "",
    promote: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="heading">
              <h2><u> Contact Information:</u></h2>
          </label>
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="addressId">Address: </label>
          <input
            type="address"
            placeholder="Address"
            id="addressId"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
           <label className="cityId">City: </label>
          <input
            type="city"
            placeholder="City"
            id="cityId"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
        
           <label className="statelId">State: </label>
          <input
            type="state"
            placeholder="State"
            id="stateId"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">Zip Code: </label>
          <input
            type="number"
            placeholder="Zip Code"
            id="zipCode"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="mailId">Email: </label>
          <input
            type="email"
            placeholder="Enter Email"
            id="mailId"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label classNumber="phoneNum">Phone Number: </label>
          <input
            type="text"
            placeholder="Phone Number"
            id="phoneNum"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="phoneNum">Mobile Number: </label>
          <input
            type="text"
            placeholder="Mobile Number"
            id="mobileNum"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <hr></hr>
        </form>
      </div>
    );
  }
}
export default EmergentContact;