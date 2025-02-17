import { useState } from 'react';
import './App.css'

const Header = ({ invites }) => {

  return (
    <div>
      <div>
        <span>Invite people to Dribble</span>
      </div>
      <div>
        <span>{invites} invites available</span>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  
  return (
    <div>
      
    </div>
  );
};

const InviteEmail = () => {
  
  return (
    <div>
      
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
    <div>
      <button onClick={handleInvite}>INVITE</button>
    </div>
  );
};

function App() {
  const [invites, setInvites] = useState(5);

  return (
    <div className="mainContainer">
      <Header invites={invites} />
      <Footer setInvites={setInvites} invites={invites} />
    </div>
  )
}

export default App
