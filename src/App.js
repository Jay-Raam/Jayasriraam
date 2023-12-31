import Navbar from './component/Navbar';
import './App.css';
import Home from './component/home'; 
import About from './component/About';
import Skill from './component/Skill';
import Portfolio from './component/Portfolio_2';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
        <Home />
      </header>
      <div className='about'>
        <About />
      </div>
      <div className='skill'>
        <Skill />
      </div>
        <div className='Portfolio'>
        <Portfolio />
      </div>
      <div className='contact'>
        <Contact />
      </div>
      </div>
  );
}

export default App;
