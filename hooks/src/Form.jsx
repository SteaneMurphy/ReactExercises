import { useState, useEffect } from 'react';
import './Form.css';

function Form({ onSubmit }) {
  const [countryList, setCountryList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const country = e.target.elements.country.value;
    const postcode = e.target.elements.postcode.value;

    const formData = {
      title,
      firstName,
      lastName,
      email,
      country,
      postcode,
    };
    
    if (onSubmit) onSubmit(formData);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const sortedCountries = data
          .map(country => country.name.common)
          .sort();
        setCountryList(sortedCountries);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
        <select name="title" defaultValue="Ms">
            <option value="Ms">Ms</option>
            <option value="Miss"> Miss</option>
            <option value="Mrs"> Mrs</option>
            <option value="Mr"> Mr</option>
            <option value="Dr"> Dr</option>
        </select>

        <input 
            type="text"
            name="firstName"
            placeholder="First Name*"
        />

        <input 
            type="text"
            name="lastName"
            placeholder="Last Name*"
        />

        <input 
            type="text"
            name="email"
            placeholder="Email*"
        />

        <input 
            type="password"
            placeholder="Password*"
        />

        <select name="country" defaultValue="Australia">
            {countryList.map(country => (
            <option key={country} value={country}>
                {country}
            </option>
            ))}
        </select>

        <input 
            type="text"
            name="postcode"
            placeholder="Postcode"
        />
        
        <div className='checkboxContainer'>
            <div className='checkbox'>
                <input
                    className='actualCheckbox'
                    type="checkbox"
                />
            </div>
            <span>
                I agree to the Rewards Program terms and conditions and privacy policy.*
            </span>
        </div>

        <button 
            className='joinNowButton'
            type="submit"
        >
            Join Now
        </button>

        <button className='cancelButton'>
            Cancel
        </button>

        <div className='footerText'>
            <span>
                Already a member?
            </span>

            <span>
                Sign in to view your rewards and offers.
            </span>

            <span>
                Conditions apply.
            </span>

            <span>
                View Rewards Program terms and conditions.
            </span>
        </div>  
    </form>
  )
};

export default Form;
