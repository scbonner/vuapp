import React, { useState } from "react";

export default () => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    
    <div className="register_wrapper">
      <div className="register_player_column_layout_one">
        <div className="register_player_Twocolumn_layout_two">
        
          <form className="myForm">
            <div className="formInstructionsDiv formElement">
              <h2 className="formTitle">John Doe</h2>
              <p className="instructionsText" />
              <div className="register_profile_image">
                <input id="profilePic" type="file" onChange={onChangePicture} />
              </div>
               <div className="previewProfilePic">
                <img className="playerProfilePic_home_tile" src={imgData} />
              </div> 
            </div>
            <div className="fillContentDiv formElement">
              {/* <div className="names formContentElement">
                <input
                  className="inputRequest "
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="inputRequest "
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div> 
             <div className="submitButtonDiv formElement">
              <button className="submitButton">Register</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};









   
