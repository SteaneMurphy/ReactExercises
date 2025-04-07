import { useState } from 'react';
import './App.css';
import Form from './Form';
import mainImage from './assets/mainImage.webp';
import FormConfirm from './assets/FormConfirm';

function App() {

  const [formConfirm, setFormConfirm] = useState(false);
  const [userInput, setUserInput] = useState({

  });

  const handleFormSubmitted = (data) => 
  {
    setUserInput({
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      country: data.country,
      postcode: data.postcode,
    });
    setFormConfirm(true);
  }

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
        {formConfirm ? <FormConfirm data={userInput}/> : <Form onSubmit={handleFormSubmitted}/>}
      </div>
    </div>
  )
};

export default App;
