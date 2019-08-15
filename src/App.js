import React, { useState, useEffect } from "react";
import Title from "./components/title/title.js";
import Img from "./components/image/image.js";
import Explanation from "./components/explanation/explanation.js";
import axios from "axios";
import { Card } from 'semantic-ui-react';
import "./App.css";
import 'semantic-ui-css/semantic.min.css';

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
      <Card>
        <Img img={imgData} />
        <Card.Content>
          <Title title={titleData} />
          <Explanation explanation={explanationData} />
        </Card.Content>
        <Card.Content extra>
          Nasa's photo of the day
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;
