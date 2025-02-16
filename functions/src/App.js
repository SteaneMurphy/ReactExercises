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

const ProfileHeader = () => {
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
    <div className="headerContainer">
      <ProfileImage image={driver.picture.large} />
      <DriverName name={driver.name} />
      <DriverStats />
    </div>
  );
};

//BODY COMPONENTS
const DriverDetails = () => {

  return (
    <div className="detailsContainer">
      <div>
        <img src="./images/web.png" alt="icon"/>
        <p>Speaks English and German</p>
      </div>
      <div>
        <img src="./images/web.png" alt="icon"/>
        <p>From Vancouver, Canada</p>
      </div>
      <div>
        <img src="./images/web.png" alt="icon"/>
        <p>Ask about restraunts and musuems</p>
      </div>
      <hr></hr>
      <div>
        <img src="./images/web.png" alt="icon"/>
        <p>Fun Fact</p>
        <p>I am a certified grandmaster at Chess!</p>
      </div>
      <hr></hr>
    </div>
  );
};

const SocialLinks = () => {

  return (
    <div className="socialContainer">
      
    </div>
  );
};

const ProfileBody = () => {

  return (
    <div className="bodyContainer">
      <DriverDetails />
      <SocialLinks />
    </div>
  );
};

function App() {
  return (
    <div className="mainContainer">
      <Logo />
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
}

export default App;
