import React from 'react';
import SkillContainer from './SkillContainer';

function Person({ clickHandler, isVisible }) {
  return (
    <div className='person'>
      <h2>Edyta</h2>
      <p className='person__description'>
        Jestem Twoją przewodniczką w tajemniczym labiryncie wszechświata, a moje
        kwalifikacje to nie tylko zbiór tytułów, ale przede wszystkim pasja do
        odkrywania znaczeń ukrytych pod powierzchnią rzeczywistości. Jako
        dyplomowany psychotronik ze specjalizacją biotroniki, posługuję się
        energią, aby wspomóc Cię w procesie uzdrawiania i równowagi.
      </p>
      <SkillContainer clickHandler={clickHandler} isVisible={isVisible} />
    </div>
  );
}

export default Person;
