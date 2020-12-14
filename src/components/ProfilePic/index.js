// import React from "react";


// class ProfilePic extends React.Component {
//   state = {
//     // type: "",
//     // number: "",
//     // issuedate: "",
//     // expdate: "",
//     UploadAuthorizationdocument: ""
//   };
//   handleChange = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="heading">
//             <h2>
//               <u> Pic: </u>
//             </h2>
//           </label>
//           <br />
//           <label htmlFor="type">Type:</label>
//           <input
//             type="text"
//             placeholder="Type"
//             id="type"
//             onChange={this.handleChange}
//           />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <label htmlFor="number">Number:</label>
//           <input
//             type="text"
//             placeholder="Number"
//             id="number"
//             onChange={this.handleChange}
//           />{" "}
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <label htmlFor="issuedate">Issue Date</label>
//           <input type="date" id="issuedate" onChange={this.handleChange} />{" "}
//           <label htmlFor="expdate">Exp Date</label>
//           <input type="date" id="expdate" onChange={this.handleChange} />{" "}
//           <label htmlFor="UploadAuthorizationdocument">
//             Upload Authorization document:
//           </label>
//           <input
//             type="file"
//             id="UploadAuthorizationdocument"
//             multiple
//             onChange={this.handleChange}
//           />{" "}
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ProfilePic;

