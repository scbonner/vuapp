import React from 'react';
import Register from '../Register';
import SpouseInfo from '../SpouseInfo';
import ProfilePic from '../ProfilePic';
import ProfilePic2 from '../ProfilePic2'
import EmergentContact from '../EmergentContact'
import Language from '../Language';
import Landing from '../Landing'



const App = () => (
  <div> 
    <ProfilePic />
    <Register />
    <Language />
    <ProfilePic2 />
    <SpouseInfo />
    <EmergentContact />
    <Landing />
  
    
    {/* <Profile />
    <Language />
    <SpousePic />
    <SpouseInfo />
    <EmergentContact /> */}
    </div>
);

export default App;