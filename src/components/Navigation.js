import React from 'react';

function Navigation() {
  return (
    <>
      <div className='nav__bar'>
        <ul className='nav__list'>
          <div className='nav__logo'>
            <li className='Logo__container nav__item'>
              <div className='Logo'></div>
              <p> CORAZON </p>
            </li>
          </div>
          <div className='nav__items'>
            <li className='nav__item'>
              <a href='#Hero'>Home</a>
            </li>
            <li className='nav__item'>
              <a href='#Team'>Team</a>
            </li>
            <li className='nav__item'>
              <a href='#Contact'>Contact</a>
            </li>
          </div>
        </ul>
      </div>
      <div className='nav__bar-mobile'>
        <li className='Logo__container nav__item'>
          <a href='#Hero'>
            <div className='Logo'></div>
            <p> CORAZON </p>
          </a>
        </li>
      </div>
    </>
  );
}

export default Navigation;
