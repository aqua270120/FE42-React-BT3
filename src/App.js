import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTap1 from './BaiTap1/index';
import BaiTap2 from './layout-bootstrap/index'
import BaiTap3 from './BaiTap3/index'
function App() {
  return (
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
    <div>
      {/* <BaiTap1 /> */}
      {/* <BaiTap2 /> */}
      <BaiTap3 />
    </div>
  );
}

export default App;
