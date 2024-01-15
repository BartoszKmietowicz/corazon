import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Team from './components/Team';
import './css/main.css';

function App() {
  const [isVisible, setVisible] = useState({
    id: '1',
  });
  useEffect(() => {
    setVisible({ id: '1' });
  }, []);
  const handleClick = (e) => {
    setVisible({ id: e.target.id });
    console.log(e.target);
  };
  return (
    <div className='App'>
      <Navigation clickHandler={handleClick} />
      {isVisible.id === '1' && <Hero />}
      {isVisible.id === '2' && <Team />}
    </div>
  );
}

export default App;
