import React, { useState, useEffect } from "react";
import Title from "./components/title/title.js";
import Image from "./components/image/image.js";
import Explanation from "./components/explanation/explanation.js";
import axios from "axios";
import "./App.css";

function App() {
  const [titleData, setTitleData] = useState(' ');
  const [imgData, setImgData] = useState(' ');
  const [explanationData, setExplanationData] = useState(' ');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setImgData(response.data.hdurl);
        setTitleData(response.data.title);
        setExplanationData(response.data.explanation);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="container">
      <Title title={titleData} />
      <Image img={imgData} />
      <Explanation explanation={explanationData} />
    </div>
  );
}

export default App;
