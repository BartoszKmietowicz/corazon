import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Team from './components/Team';
import Contact from './components/Contact';
import './css/main.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
