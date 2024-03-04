import React from 'react';

function Hero() {
  return (
    <section id='Hero' className='Hero'>
      <div className='Hero__left'>
        <h1> Otwieraj się na siebie, na innych, na świat. </h1>
        <p>
          Witaj w magicznym świecie, gdzie liczby, litery i symbole tkanek duszy
          układają się w fascynujące opowieści o Twoim życiu. Poznaj osobę,
          która nie tylko studiowała nauki ezoteryczne, ale wciela je w życie z
          pasją i zaangażowaniem. Zapraszam Cię do wspólnej podróży po krainach
          magii i tajemnic, gdzie każdy symbol, liczba i gest może być kluczem
          do odnalezienia własnej prawdy i szczęścia.
        </p>
      </div>
      <div className='Hero__right'>
        <div className='Hero__right__shape'>
          <div className='Hero__right__shape-blob'></div>
        </div>
        <div className='Hero__right__CTA'>
          <li>
            <a href='#Contact'>Skontaktuj się</a>
          </li>
        </div>
      </div>
    </section>
  );
}

export default Hero;
