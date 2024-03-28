import "./App.css";
import mscLogo from "./images/mscLogo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mscLogo} className="msc-logo" />
        Welcome to the MSC site!
      </header>
    </div>
  );
}

export default App;
