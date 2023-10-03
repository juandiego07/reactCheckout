// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Succes from './components/Succes';

function App() {
  return (
    <Fragment>
      <div>
        Paga con ePayco
      </div>
      <Succes></Succes>
    </Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
