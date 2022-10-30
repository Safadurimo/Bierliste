
import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1> Meine Striche</h1>
      <h1> Striche für mich hinzufügen</h1>
      <h1>Alle Striche</h1>
      <h1>Striche für jemand andere hinzufügen</h1>
      <h1>Produkte</h1>
      <h1>Benutzer</h1>
        <button onClick={handleSubmit}>
          Activate Lasers
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
