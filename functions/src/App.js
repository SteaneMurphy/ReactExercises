import { useEffect, useState } from 'react';
import './App.css';

//DUMMY DATA
const carData = [
  {
    model: "Mazda CX9",
    licence: "GWT345",
  },
  {
    model: "Toyota Prius",
    licence: "CDD099",
  },
  {
    model: "Toyota Camry",
    licence: "HUT978",
  },
  {
    model: "Kia Serranto",
    licence: "ACE321",
  },
  {
    model: "Nissan Quashqai",
    licence: "QWE881",
  },
];

const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Portuguese", "Arabic", 
  "Hindi", "Italian", "Dutch", "Turkish", "Swedish"];

const driverKnowledge = ["restaurants", "museums", "parks", "nightlife", "historical sites", "shopping", "public transport", "local events", 
  "best coffee spots", "hidden gems"];

const funFacts = [
  "I am a certified grandmaster in Chess!",
  "I once drove across the entire country in a week!",
  "I can solve a Rubik's Cube in under a minute!",
  "I know five different languages!",
  "I used to be a professional race car driver!",
  "I have a collection of over 100 vintage license plates!",
  "I once gave a ride to a famous celebrity!",
  "I can play the guitar and sing at the same time!",
  "I love discovering the best hidden food spots in the city!",
  "I have completed a marathon in under four hours!"
];

const driverReasons = [
  "I wanted a flexible work schedule.",
  "I enjoy meeting new people.",
  "It’s a great way to earn extra income.",
  "I love driving and exploring new places.",
  "It allows me to work when I want.",
  "I appreciate the independence it offers.",
  "I wanted to make use of my car.",
  "It fits well with my other commitments.",
  "I enjoy the freedom of being my own boss.",
  "It’s a fun and dynamic job."
];

  

//LOGO COMPONENTS
const Logo = () => {

  return (
    <div className="logoContainer">
      <img src="./images/UberLogoBlack.png" alt="Uber Logo" />
    </div>
  );
};

//HEADER COMPONENTS
const ProfileImage = ({ image }) => {

  return (
    <div className="imageContainer">
      <img className="profileImage" src={image} alt="Driver Profile" />
    </div>
  );
};

const DriverName = ({ name }) => {
  const car = carData[Math.floor(Math.random() * carData.length)];

  return (
    <div className="nameContainer">
      <p className="name">{name.first} {name.last}</p>
      <p className="car">{car.model} - {car.licence}</p>
    </div>
  );
};

const DriverStats = () => {
  //random trip amount, rating and years driving
  const trips = (Math.floor(Math.random() * 3000)).toLocaleString();
  const rating = (Math.random() * 5).toFixed(1);
  const years = Math.floor(Math.random() * 10);

  return (
    <div className="statsContainer">
      <div>
        <p className="statsTop">{trips}</p>
        <p className="statsBot">Trips</p>
      </div>
      <div>
        <p className="statsTop">{rating}★</p>
        <p className="statsBot">Rating</p>
      </div>
      <div>
        <p className="statsTop">{years}</p>
        <p className="statsBot">Years</p>
      </div>
    </div>
  );
};

const ProfileHeader = ({ driver }) => {

  return (
    <div className="headerContainer">
      <ProfileImage image={driver.picture.large} />
      <DriverName name={driver.name} />
      <DriverStats />
    </div>
  );
};

//BODY COMPONENTS
const DriverDetails = ({ driver }) => {
  const language = languages[Math.floor(Math.random() * languages.length)];
  const knowledge = driverKnowledge[Math.floor(Math.random() * driverKnowledge.length)];
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  const reason = driverReasons[Math.floor(Math.random() * driverReasons.length)];

  return (
    <div className="detailsContainer">
      <div>
        <img src="./images/web.png" alt="icon"/>
        <span>Speaks</span>&nbsp;<span style={{color: "black"}}><b>{language}</b></span>
      </div>
      <div>
        <img src="./images/location.png" alt="icon"/>      
        <span>From</span>&nbsp;<span style={{color: "black"}}><b>{driver.location.city}, {driver.location.country}</b></span>    
      </div>
      <div>
        <img src="./images/question.png" alt="icon"/>       
        <span>Ask about</span>&nbsp;<span style={{color: "black"}}><b>{knowledge}</b></span> 
      </div>           
      <hr></hr>
      <div className="double">
        <div>
          <span style={{color: "black", fontSize: "1.1em"}}>Fun Fact</span>
        </div>
        <div>
          <img src="./images/message.png" alt="icon"/>
          <span>{funFact}</span>
        </div>
      </div>    
      <hr></hr>
      <div className="double">
        <div>
          <span style={{color: "black", fontSize: "1.1em"}}>Why Uber?</span>
        </div>
        <div className="quote">
          <img src="./images/quote.jpg" alt="icon"/>  
          <span>{reason}</span>
        </div>    
      </div>
      <hr></hr>
    </div>
  );
};

const SocialLinks = () => {

  return (
    <div className="socialContainer">
      <div className="socialImageContainer">
        <img src="./images/facebook.png" alt="Facebook Link"/>
      </div>
      <div className="socialImageContainer">
        <img src="./images/instagram.png" alt="Instagram Link"/>
      </div>
      <div className="socialImageContainer">
        <img src="./images/twitter.png" alt="X Link"/>
      </div>
    </div>
  );
};

const ProfileBody = ({ driver }) => {

  return (
    <div className="bodyContainer">
      <DriverDetails driver={driver} />
      <SocialLinks />
    </div>
  );
};

function App() {
  const [driver, setDriver] = useState(null);

  //fetch random user from free api
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setDriver(data.results[0]);
        console.log(data.results[0]);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (!driver) {
    return null;
  }

  return (
    <div className="mainContainer">
      <Logo />
      <ProfileHeader driver={driver} />
      <ProfileBody driver={driver} />
    </div>
  );
}

export default App;
