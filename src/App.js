import "./App.css";
import avatar from "./assets/avatar-jessica.jpeg";

function App() {
  const buttonNames = [
    "Github",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className="App">
      <div className="social-card">
        <div className="social-title-card">
          <img src={avatar} className="social-avatar" alt="jessica-randall" />
          <h2 className="social-title-name">Jessica Randall</h2>
          <small className="social-location">London, United Kingdom</small>
        </div>
        <small className="social-blurb">
          "Front-end developer and avid reader."
        </small>
        <div className="social-button-group">
          {buttonNames.map((buttonName, idx) => (
            <button key={idx}>{buttonName}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
