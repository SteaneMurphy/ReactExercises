import { useState } from 'react';
import './App.css';
import Form from './Form';
import mainImage from './assets/mainImage.webp';

function App() {

  return (
    <div className='mainContainer'>
      
      <div className='headingContainer'>
        <span className='heading'>Become a member</span>
        <span className='subHeading'>Join now to receive exclusive updates, rewards and offers including Spend & Save.</span>
        <a className='learnMoreSubHeading'>Learn More</a>
      </div>

      <div className='subContainer'>
        <div className='subContainerImage'>
          <img src={mainImage}></img>
        </div>
        <Form />
      </div>
    </div>
  )
};

export default App;
