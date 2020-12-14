import React from 'react';
 


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
            <h2>
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
          <select id="department" onChange={this.handleChange}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
          </select>
          {" "}
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
          <select id="department" onChange={this.handleChange}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
          </select>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label className="lastName">Marital Status: </label>
            {/* <p>Marital Status:</p> */}
            {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
            
              <input type="radio" id="single" name="drone" value="huey"
                    checked />
              <label for="single">Single</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
                        
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">Married</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
            
              <input type="radio" id="louie" name="drone" value="louie" />
              <label for="louie">Separated</label>
              &nbsp;&nbsp;&nbsp;&nbsp;

              <input type="radio" id="louie" name="drone" value="louie" />
              <label for="louie">Divorced</label>            
          <br />
          <br />
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <label className="phoneNum">Number of Children: </label>
          
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
        </form>
  
      </div>
    );
  }
}

export default Register;


