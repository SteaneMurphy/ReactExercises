import { useEffect, useState } from 'react';
import './App.css'

// HEADER COMPONENTS
const Header = ({ invites }) => {

  return (
    <div>
      <div className="heading">
        <span>Invite people to Dribble</span>
      </div>
      <div className="subHeading">
        <span>{invites} invites available</span>
      </div>
    </div>
  );
};

// PROFILE CARD COMPONENTS
const ProfileImage = ({ image }) => {

  return (
    <div className="profileImage">
      <img src={image} />
    </div>
  );
};

const ProfileDetails = ({ name, location, email }) => {

  return (
    <div className="profileDetails">
      <span style={{ color: "#92b277", fontSize: "1.1em", fontWeight: "600"}}>{name}</span>
      <div className="location">
        <div>
          <span style={{ color: "#959595", fontWeight: "600"}}>{location.city}, {location.country}</span>
        </div>
        <div>
          <span style={{ fontWeight: "500"}}>{email}</span>
        </div>
      </div>
    </div>
  );
};

const SelectProfileIcon = ({ iconSelected, setIconSelected, index }) => {
  
  //check this components icon state against the state in 'App', flip the state
  //once found
  const handleOnClick = () => {
    setIconSelected((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="selectProfileIcon">
      <img src={`./images/dribble${iconSelected ? "On" : "Off"}.png`} 
           onClick={handleOnClick} 
           alt="Select Profile Icon" />
    </div>
  );
};

const ProfileCard = ({ user, index, iconSelected, setIconSelected }) => {

  return (
    <div className="profileCard">
      <ProfileImage image={user.picture.large} />
      <ProfileDetails name={user.name.first} location={user.location} email={user.email} />
      <SelectProfileIcon index={index} iconSelected={iconSelected} setIconSelected={setIconSelected} />
  </div>
  );
};

// FOOTER/INVITE BUTTON COMPONENTS
const InviteEmail = () => {
  
  return (
    <div className="inviteEmail">
      <input type="text" placeholder="   Send invite by e-mail"/>
    </div>
  );
};

const Footer = ({ setInvites, invites }) => {
  const handleInvite = () => {
    if (invites > 0) {
      setInvites(invites => invites - 1);
    }
  };

  return (
    <div className="footer">
      <InviteEmail />
      <button onClick={handleInvite}>INVITE</button>
    </div>
  );
};


// MAIN APP
function App() {
  const [invites, setInvites] = useState(5);
  const [users, setUsers] = useState([]);
  const [iconSelected, setIconSelected] = useState([]);
  
    //fetch random user from free api
    useEffect(() => {
      async function fetchUser() {
        try { 
          const response = await fetch("https://randomuser.me/api/?results=8");
          const data = await response.json();
          setUsers(data.results);
          setIconSelected(new Array(data.results.length).fill(false));
        }
        catch (error) {
          console.error("Error fetching user:", error);
        }
      }
  
      fetchUser();
    }, []);
  
  if (users.length === 0) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="mainContainer">
      <Header invites={invites} />
      <hr></hr>
      {/* For each user in fetched user array, instantiate a profile card component */}
      {users.map((user, index) => (
        <ProfileCard 
          user={user} 
          key={index}
          index={index}
          iconSelected={iconSelected[index]} 
          setIconSelected={setIconSelected} />
      ))}

      <Footer setInvites={setInvites} invites={invites} />
    </div>
  )
}

export default App
