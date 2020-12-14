import React from 'react';
 
// const Register = () => (
//   <div>
//     <h1>App</h1>
//   </div>
// );
 
// export default Register;

class Register extends React.Component {
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
              <p><u> Personal Information:</u></p>
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
          <label className="middleName">Middle Name: </label>
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
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="addressId">Marital Status: </label>
          <select id="maritalStatus" onChange={this.handleChange}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
          </select>
          <br />
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <label className="phoneNum">Number of Kids: </label>
          <select id="department" onChange={this.handleChange}>
            <option value="zero">zero</option>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
            <option value="five">five</option>
            <option value="six">six</option>
            <option value="seven">seven</option>
            <option value="eight">eight</option>
            <option value="more">more</option>
          </select>
          <br />
          <br />
          <hr></hr>
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
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <label className="phoneNum">Number of Kids: </label>
          <br />
          <br />
          {/* <label classNumber="jobTitle">Job Title: </label>
          <input
            type="text"
            placeholder="Job Title"
            id="jobTitle"
            onChange={this.handleChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp; Reporting Manager:
          <select id="reportingManager" onChange={this.handleChange}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
          </select>
          <br />
          <br />
          Branch:
          <select id="branch" onChange={this.handleChange}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
          </select>
          <br />
          <br />
          Employee Status:
          <select id="employeeStatus" onChange={this.handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <br />
          <br />
          Marital Status:
          <select id="maritalStatus" onChange={this.handleChange}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
          </select>
          <br />
          <br />
          Role:
          <select id="role" onChange={this.handleChange}>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select> */}
          <br />
          <br />
          <label htmlFor="checkbox">Promote as Manager</label>
          <input type="checkbox" id="promote" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Register;


