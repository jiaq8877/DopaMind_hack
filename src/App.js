import "./styles.css";
import "./App.css";
import logo from "./peanut2.png";
import nhs from "./nhs_logo.png";
import imperial from "./imperial_logo.png";
import exercise from "./exercise.png";
import music from "./music.png";
import team from "./team.jpeg";
import sleep from "./Sleep.png";
import doctor from "./doctor.png";
import demo from "./presentationdopamind.PNG";

import React from "react";
import { useState, Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import Tabs from "./components/Tabs";
import Popup from "./components/Popup";
// import Popup2 from "./components/Popup";
// function clickMe() {}

export default function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonStressed, setButtonStressed] = useState(false);
  const [buttonStressedQ2, setButtonStressedQ2] = useState(false);
  const [buttonStressedQ3, setButtonStressedQ3] = useState(false);
  const [buttonStressedQ4, setButtonStressedQ4] = useState(false);
  const [buttonStressedQ5, setButtonStressedQ5] = useState(false);
  const [advice1, setAdvice1] = useState(false);
  const [advice2, setAdvice2] = useState(false);
  const [advice3, setAdvice3] = useState(false);
  const [advice4, setAdvice4] = useState(false);

  return (
    <div className="App">
      <div className="banner">
        <h1>dopaMind</h1>
        <span className="peanut-img">
          <br></br>
          <img src={logo} width="100" />
        </span>
      </div>

      <br></br>
      <Tabs>
        <div label="Home">
          <br></br>
          <main>
            <div className="main-question">How are you feeling today?</div>
            <br></br>
            <div className="btn-group">
              <button
                className="emotion-buttons"
                onClick={() => {
                  setButtonPopup(true), setButtonPopup2(false);
                }}
              >
                {" "}
                😊
              </button>
              <button
                className="emotion-buttons"
                onClick={() => {
                  setButtonPopup(false), setButtonPopup2(true);
                }}
              >
                😖
              </button>

              <button
                className="emotion-buttons"
                onClick={() => {
                  setButtonPopup(false), setButtonPopup2(true);
                }}
              >
                😢
              </button>
              <button
                className="emotion-buttons"
                onClick={() => {
                  setButtonPopup(false), setButtonPopup2(true);
                }}
              >
                😡
              </button>

              <Popup trigger={buttonPopup}>
                <h2>"That's great to hear!"</h2>
                <div className="happy-tip">
                  <p>
                    {/* <img src={logo} width="25" /> */}
                    Dr. Peanut says: I'm proud of you! Spread that joy and love
                    around to your loved ones!
                  </p>
                </div>
              </Popup>

              <Popup trigger={buttonPopup2}>
                <h2>"Oh no, what's wrong? Let Dr. Peanut help you!"</h2>
                <br></br>
                <button
                  className="peanut-talk"
                  onClick={() => {
                    setButtonStressed(true);
                  }}
                >
                  Talk to Dr. Peanut!
                </button>
              </Popup>

              <Popup trigger={buttonStressed}>
                <br></br>
                <h2>
                  "How many times have you been feeling tired for the past
                  week?"
                </h2>
                <br></br>
                <div className="btn-group2">
                  {/* <button className="option-buttons" onClick={()=>setButtonStressedQ2{true};}>Everyday</button> */}
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ2(true);
                    }}
                  >
                    Everyday
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ2(true);
                    }}
                  >
                    3 – 5 times a week
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ2(true);
                    }}
                  >
                    1 – 2 times a week
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ2(true);
                    }}
                  >
                    Not at all
                  </button>
                </div>
              </Popup>

              <Popup trigger={buttonStressedQ2}>
                <br></br>
                <h2>"How long have you gone out per day for the last week?"</h2>
                <br></br>
                <div className="btn-group3">
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ3(true);
                    }}
                  >
                    4 hours and above
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ3(true);
                    }}
                  >
                    1 – 3 hours
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ3(true);
                    }}
                  >
                    Just for a bit to get some air
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ3(true);
                    }}
                  >
                    Not at all
                  </button>
                </div>
              </Popup>

              <Popup trigger={buttonStressedQ3}>
                <br></br>
                <h2>
                  "How many meals have you been eating per day for the last
                  week?"
                </h2>
                <br></br>
                <div className="btn-group4">
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ4(true);
                    }}
                  >
                    5 and above
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ4(true);
                    }}
                  >
                    3 – 4 meals a day{" "}
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ4(true);
                    }}
                  >
                    2 meals
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ4(true);
                    }}
                  >
                    1 or less{" "}
                  </button>
                </div>
              </Popup>

              <Popup trigger={buttonStressedQ4}>
                <br></br>
                <h2>
                  "Have you been thinking that your future is going to be bad
                  this week?"
                </h2>
                <br></br>
                <div className="btn-group4">
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ5(true);
                    }}
                  >
                    Almost every day
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ5(true);
                    }}
                  >
                    3 – 5 times a week
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ5(true);
                    }}
                  >
                    1 – 2 times a week
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setButtonStressedQ5(true);
                    }}
                  >
                    Not at all{" "}
                  </button>
                </div>
              </Popup>
              <Popup trigger={buttonStressedQ5}>
                <br></br>
                <h2>"How many hours of sleep have you been having lately?"</h2>
                <br></br>
                <div className="btn-group4">
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setAdvice1(false), setAdvice2(true);
                    }}
                  >
                    11 hours or more hours
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setAdvice1(true), setAdvice2(false);
                    }}
                  >
                    7 – 10 hours
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setAdvice1(true), setAdvice2(false);
                    }}
                  >
                    5 – 7 hours
                  </button>
                  <button
                    className="option-buttons"
                    onClick={() => {
                      setAdvice1(false), setAdvice2(true);
                    }}
                  >
                    Less than 5 hours
                  </button>
                </div>
              </Popup>

              <Popup trigger={advice1}>
                <br></br>
                <div>
                  <h1>Little Steps:</h1>
                  <h2>Exercise regularly!</h2>
                  <img src={exercise} width="100" />
                  <br></br>
                  <h2>Sleep with calming music.</h2>
                  <img src={music} width="100" />
                  <br></br>
                  <h2>Establish sleep hygiene guidelines.</h2>
                  <img
                    src={sleep}
                    width="100"
                    href="https://thesleepcharity.org.uk/information-support/adults/sleep-hygiene/"
                  />
                </div>
                <br></br>
              </Popup>

              <Popup trigger={advice2}>
                <br></br>
                <div>
                  <h1>Advice:</h1>
                  <h2>Consider speaking to your GP.</h2>
                  <img src={doctor} width="100" />
                </div>
                <br></br>
              </Popup>
            </div>
          </main>
        </div>
        <div label="See Demo">
          <br></br>
          <h1>Wondering what our feature will look like on your website?</h1>
          <h2>Check out this demo!</h2>
          <img src={demo} width="1000" />
        </div>

        <div label="Support">
          <br></br>
          <h1>
            If you would like to get more information, please feel free to click
            on links below:
          </h1>
          <br></br>
          <img src={nhs} width="200" />
          <p>
            <button className="nhs">
              <a href="https://www.nhs.uk/mental-health/">NHS Mental Health</a>
            </button>
          </p>
          <br></br>
          <img src={imperial} width="200" />
          <p>
            <button className="imperial-wellbeing">
              <a href="https://www.imperial.ac.uk/health-and-wellbeing/">
                Imperial Health and Wellbeing
              </a>
            </button>
          </p>
          <br></br>
        </div>
        <div label="About Us">
          <div className="about-us">
            <h1>About this site</h1>
            {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
            <br></br>
            <p>
              Welcome to the dopaMind, a website that caters for any student who
              is having or has had any mental health problems.
            </p>
            <br></br>
            <p>
              Mental health is a hot topic, but there is still not enough public
              awareness. Many students (especially Imperial students) are
              experiencing MH problems, but many of them haven’t realised. Only
              few people actively search for MH help from websites, apps,
              wellbeing support from counsellors, most people won't start to
              look for help until they’ve hit a really low point. This is
              already too late and we would like to avoid it. The earlier to
              solve problems, the easier it would be. The best way is just to
              prevent mental health problems by maintaining our minds healthy.
            </p>
            <br></br>
            <p>
              Apart from the lack of awareness, it is usually not convenient for
              students who need help to actually get help. Some people think
              it’s a lot of work to get help, so they end up not doing it or
              giving it up on the half way. Besides, many websites provide
              overwhelming information, so that students would be reluctant to
              read it through. Therefore, make the support service accessible,
              pproachable, easy to read and easy to pick up is a key to improve
              the mental health for people.
            </p>
            <br></br>
            <p>
              Our mission is to normalize mental health by creating awareness on
              our daily platforms and providing students with some easy to pick
              everyday solutions.
            </p>
            <br></br>
            <h1>Our Team</h1>
            <br></br>
            <img src={team} width="500" />
            <h1>Nabila 👀, Tarane 🎈, Jia Qi 😸 and Shuyi 🧐</h1>
            <br></br>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
