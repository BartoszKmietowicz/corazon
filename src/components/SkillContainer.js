import React from 'react';

const skills = {
  1: {
    id: '1',
    class: 'Numerology',
    title: 'Numerologia',
    desc: 'Numerologia to moja specjalność - poprzez liczby analizuję Twoją drogę życiową,odkrywając tajemnice Twojej osobowości i przeznaczenia.',
  },
  2: {
    id: '2',
    class: 'Graphology',
    title: 'Grafologia',
    desc: 'Grafologia to narzędzie, które pozwala mi zagłębić się w Twoją duszę, odczytując zapisane w charakterze pisma emocje i tajemnice.',
  },
  3: {
    id: '3',
    class: 'Diagnosis',
    title: 'Diagnoza Duszy',
    desc: ' Holistyczna diagnoza duszy to podróż do wnętrza Twojego istnienia, gdzie łączę wiedzę z różnych dziedzin, aby pomóc Ci zrozumieć siebie głębiej i odnaleźć harmonię.',
  },
  4: {
    id: '4',
    class: 'Tarot',
    title: 'Tarot',
    desc: 'Tarot to magiczny klucz otwierający bramy do nieznanych przestrzeni Twojej świadomości, podążając za wskazówkami kart w poszukiwaniu odpowiedzi na nurtujące Cię pytania.',
  },
  5: {
    id: '5',
    class: 'Symbolism',
    title: 'Symbolika snów',
    desc: ' Symbolika snów to obszar, w którym interpretuję znaki, które Twój umysł przesyła Ci podczas snu, odkrywając ich ukryte znaczenie i przesłanie.',
  },
};
const SkillContainer = ({ clickHandler, isVisible }) => {
  return (
    <div className='box__container'>
      <div className='box__container__boxes'>
        {Object.keys(skills).map((index, key) => {
          return (
            <div
              key={key}
              id={skills[index].id}
              className={`box__container__item ${skills[index].class} ${
                isVisible.id === skills[index].id ? 'active' : ''
              }`}
              onClick={clickHandler}
            >
              {skills[index].title}
            </div>
          );
        })}
      </div>
      <div className='box__container__description'>
        {Object.keys(skills).map((index, key) => {
          return (
            <div key={key}>{isVisible.id === index && skills[index].desc}</div>
          );
        })}
      </div>
    </div>
  );
};
export default SkillContainer;
