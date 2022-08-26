import Navbar from './componets/Navbar/Navbar';


import Detail from './componets/Right/Detail'
import './App.css';


function App() {
  return (
    <div className="App">
      <div >
        <Navbar />
        
      </div>
      <div className='main-container'>
        
        <div className='main-right'>
          <Detail />

        </div>
      </div>
    </div>
  );
}

export default App;
