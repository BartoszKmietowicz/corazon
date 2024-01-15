import React, { useEffect, useState } from 'react';
import Person from './Person';

function Team() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);
  const toggleView = (e) => {
    setVisible(!isVisible);
  };
  return (
    <section id='team'>
      <div className='controls'>
        <button
          type='button'
          className={isVisible ? 'active' : ''}
          disabled={isVisible}
          onClick={() => toggleView()}
        >
          Małgorzata
        </button>
        <button
          type='button'
          className={!isVisible ? 'active' : ''}
          disabled={!isVisible}
          onClick={() => toggleView()}
        >
          Ewa
        </button>
      </div>
      <ul className='team__container'>
        {isVisible && (
          <li>
            <Person personName='Małgorzata Sabadasz' />
          </li>
        )}
        {!isVisible && (
          <li>
            <Person personName='Ewa' />
          </li>
        )}
      </ul>
    </section>
  );
}

export default Team;
