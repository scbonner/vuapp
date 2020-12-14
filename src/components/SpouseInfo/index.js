import React from 'react';
 


class SpouseInfo extends React.Component {
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
            <h2>Image
              <p><u> Spouse Information:</u></p>
            </h2>
          </label>
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="firstName">First Name: </label>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            onChange={this.handleChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="middleName">Middle Initial: </label>
          <input
            type="text"
            placeholder="Middle Name"
            id="middleName"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">Last Name: </label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">DOB: </label>
          <input
            type="number"
            placeholder="Date Of Birth"
            id="dob"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">Gender Identify: </label>
          <input
            type="text"
            placeholder="Gender"
            id="gender"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">Age: </label>
          <input
            type="text"
            placeholder="Age"
            id="age"
            onChange={this.handleChange}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
         
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">Race/Ethnic: </label>
          <input
            type="text"
            placeholder="Race"
            id="race"
            onChange={this.handleChange}
          />
      </form>
    </div>
    )};
   }
export default SpouseInfo;
