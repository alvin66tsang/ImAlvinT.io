import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'
import Projects from './pages/Projects/Projects';


function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <Skills />
      <Resume />
      <Projects />
      <Contact />

      <Link 
        to={'home'} 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}
        >
        <button className='absolute bottom-4 right-4 shadow-inner bg-zinc-500 text-white border-1 px-3 py-2 opacity-85'>
          <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
}

export default App;
