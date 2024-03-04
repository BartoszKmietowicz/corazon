import React, { useEffect, useState } from 'react';
import Person from './Person';

function Team() {
  const [isVisible, setIsVisible] = useState({ id: '' });

  useEffect(() => {
    setIsVisible({ id: '1' });
  }, []);
  const handleClick = (e) => {
    setIsVisible({ id: e.target.id });
    // console.log(e.target.id);
  };
  return (
    <section id='Team'>
      <div className='title'>Nasz Zespół</div>
      <ul className='team__container'>
        <div className='blob'></div>
        <Person clickHandler={handleClick} isVisible={isVisible} />
      </ul>
    </section>
  );
}

export default Team;
