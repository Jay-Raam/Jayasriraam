import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'; 
import About from './component/About';
import Skill from './component/Skill';
import Blog from './component/Blog';
import Portfolio from './component/Work';
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
      <div className="blog">
        <Blog />
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
