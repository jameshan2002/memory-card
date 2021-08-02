import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Cards from "./components/cards";

const App = () => {
  const [logos, setLogos] = useState([
    { name: "BBC", picture: "BBC.png", id: 0 },
    { name: "Chase", picture: "Chase.png", id: 1 },
    { name: "CN", picture: "CN.png", id: 2 },
    { name: "Facebook", picture: "Facebook.png", id: 3 },
    { name: "Linkedin", picture: "Linkedin.png", id: 4 },
    { name: "Microsoft", picture: "Microsoft.png", id: 5 },
    { name: "MTV", picture: "MTV.png", id: 6 },
    { name: "Snapchat", picture: "Snapchat.png", id: 7 },
    { name: "SVG", picture: "SVG.png", id: 8 },
    { name: "Uber", picture: "Uber.png", id: 9 },
  ]);

  const [clickedLogos, setClickedLogos] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const randomizing = () => {
    setLogos(randomizeLogos(logos));
  };

  useEffect(() => {
    randomizing();
  }, []);

  const randomizeLogos = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const checkClicks = (logos) => {
    if (clickedLogos.some((i) => logos === i)) {
      setClickedLogos([]);
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    } else {
      setClickedLogos(clickedLogos.concat(logos));
      setScore(score + 1);
    }
  };

  const renderLogos = () => {
    return logos.map((i) => {
      return (
        <div
          onClick={() => {
            checkClicks(i.name);
            randomizing();
          }}
          key={i.id}
        >
          <Cards logoName={i.name} logoPicture={i.picture} id={i.id} />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <div className="gameBoard">{renderLogos()}</div>
    </div>
  );
};

export default App;
