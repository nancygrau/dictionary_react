
import './App.css';
import Dictionary from "./Dictionary.js"
import logo from "./logo.png"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">Dictionary
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"><small>Coded by Nancy Grau</small></footer>
      </div>
    </div>
  );
}


