import React from 'react';
 


class SpouseInfo extends React.Component {

    state = {
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      age: "",
      genderIdentity: "",
      race: "",
      marital: "",
      children: "",
      phoneNum: "",
      addressId: "",
      emailId: "",
      mobileNum: "",
      addressId: "",
      cityId: "",
      stateId: "",
      zipCodeId: ""
      
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
                <p><u> Profile Information: </u></p>
              </h2>
            </label>
            <br />
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
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
                      
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="issuedate">Birth Date: </label>
            <input type="date" id="issuedate" onChange={this.handleChange} 
  
            />{" "}
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="genderIdentity">I Identify As: </label>
            <select id="gender" onChange={this.handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender Male">Transgender Male</option>
            <option value="Transgender Female">Transgender Female</option>
            </select>
            
            {/* <input
              type="text"
              placeholder="Provide"
              id="lastName"
              onChange={this.handleChange}
            /> */}
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="age">Age: </label>
            <input
              type="text"
              placeholder="Age"
              id="age"
              onChange={this.handleChange}
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="race">Race/Ethnic: </label>
            <select id="department" onChange={this.handleChange}>
              <option value="four">Choose One</option>
              <option value="one">African American or Black</option>
              <option value="two">American Indian or Alaska Native</option>
              <option value="three">Asian</option>
              <option value="four">Hispanic or Latino</option>
              <option value="five">Native Hawaiian or Pacific Islander</option>
              <option value="six">White</option>
            </select>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="marital">Marital Status: </label>
              {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
              
            <input type="radio" id="single" name="drone" value="single"
                  checked />
            <label for="single">Single</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
                      
            <input type="radio" id="married" name="drone" value="married" />
            <label for="married">Married</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
          
            <input type="radio" id="separated" name="drone" value="separated" />
            <label for="separated">Separated</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
  
            <input type="radio" id="divorced" name="drone" value="divorced" />
            <label for="divorced">Divorced</label>            
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; 
            <label className="children">Number of Children: </label>
            
            <select id="department" onChange={this.handleChange}>
              <option value="zero">Zero</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
              <option value="five">Five</option>
              <option value="six">Six</option>
              <option value="seven">Seven</option>
              <option value="eight">Eight</option>
              <option value="more">More</option>
              <br />
            
            </select>
            <br />
            <br />
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
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
            <select id="department" onChange={this.handleChange}>
            <option value=""></option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MD</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NJ</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
            </select>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="zipcode">Zip Code: </label>
            <input
              type="number"
              placeholder="Zip Code"
              id="zipCodeId"
              onChange={this.handleChange}
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="emailId">Email: </label>
            <input
              type="email"
              placeholder="Enter Email"
              id="emailId"
              onChange={this.handleChange}
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="phoneNum">Phone Number: </label>
            <input
              type="text"
              placeholder="Home Phone"
              id="phoneNum"
              onChange={this.handleChange}
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label className="mobile">Mobile Number: </label>
            <input
              type="number"
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
 
export default SpouseInfo;
