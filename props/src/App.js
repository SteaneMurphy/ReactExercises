import './App.css';
import { useState, useEffect } from 'react';

const albumVersions = [
  {
    name: "The Flying Crows",
    image: "/images/death.png",
    monthly: "50,000",
  },
  {
    name: "Wacky Watermelon",
    image: "/images/flower.png",
    monthly: "125,759",
  },
  {
    name: "Heliospheric Emotions",
    image: "/images/chicken.png",
    monthly: "8,000",
  },
  {
    name: "Fantastic Fred",
    image: "/images/sun.png",
    monthly: "302,456",
  },
  {
    name: "Jules",
    image: "/images/moon.png",
    monthly: "200",
  },
];

// canvas color sample function
const getRandomPixelColor = (imageSrc, callback) => {
  const img = new Image();
  img.src = imageSrc;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const pixels = imageData.data;

    const randomIndex = Math.floor(Math.random() * (pixels.length / 4)) * 4;

    const r = pixels[randomIndex];
    const g = pixels[randomIndex + 1];
    const b = pixels[randomIndex + 2];
    const a = pixels[randomIndex + 3];

    if (a === 0 || (r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255)) {
      getRandomPixelColor(imageSrc, callback);
    } else {
      const randomColor = `rgb(${r}, ${g}, ${b})`;
      callback(randomColor);
    }
  };
};

function App() {

  const [artist, setArtist] = useState(null);
  const [background, setBackground] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedArtist = albumVersions[Math.floor(Math.random() * albumVersions.length)];
    setArtist(selectedArtist);

    if (selectedArtist) {
      getRandomPixelColor(selectedArtist.image, (color) => {
        setBackground(color);
        setLoading(false);
      });
    }
  }, []);

  const CoverImage = ({ image, background }) => (
    <div className="coverImage" style={{ backgroundColor: background }}>
      <img className="image" src={image} />
    </div>
  );

  const FollowButton = ({ buttonColor }) => (
    <button className="followButton" style={{ backgroundColor: buttonColor }}>
      Follow!
    </button>
  );

  const ArtistInformation = ({ name, monthly, textColor }) => (
    <div className="artistInfo">
      <p className="artistName" style={{ color: textColor }}>{name}</p>
      <p className="monthly" style={{ color: textColor }}>Monthly Listeners: {monthly}</p>
    </div>
  );

  const AlbumCover = ({ image, name, monthly }) => (
    <div className="albumCover">
      <CoverImage image={image} background={background} />
      <ArtistInformation name={name} monthly={monthly} textColor={background} />
      <FollowButton buttonColor={background} />
    </div>
  );

  if (loading) {
    return <div className="loading" >LOADING...</div>
  }
 
  return (
    <div id="container" style={{ backgroundColor: artist ? background : 'transparent' }}>
      {artist && <AlbumCover {...artist} />}
    </div>
  );
}

export default App;
