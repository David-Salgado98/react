
import './App.css';
const variable = 'variable'
function App(nombre) {
  return (
    <div className="App">

    <h1>Hola mundo mi objeto recibido es {nombre.name} y mi edad es {nombre.age} {nombre.salary}</h1>
    
  
    <h2>Hola {variable}</h2>

     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>*/}
    </div>
  );
}

export default App;
