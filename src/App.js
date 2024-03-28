import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./components/Header";
import mscLogo from "./images/mscLogo.png";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={mscLogo} className="msc-logo" alt="logo" />
        Welcome to the MSC site!
      </header>
    </div>
  );
}

export default App;
