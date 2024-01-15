import React from 'react';

function Navigation({ clickHandler }) {
  return (
    <div className='nav__bar'>
      <ul className='nav__list'>
        <div className='nav__logo'>
          <li
            onClick={clickHandler}
            className='Logo__container nav__item'
            id={1}
          >
            <div className='Logo'> </div> <p> CORAZON </p>{' '}
          </li>
        </div>
        <div className='nav__items'>
          <li className='nav__item' onClick={clickHandler} id={1}>
            {' '}
            Home{' '}
          </li>{' '}
          <li className='nav__item' onClick={clickHandler} id={2}>
            {' '}
            Team{' '}
          </li>{' '}
          <li className='nav__item' onClick={clickHandler} id={3}>
            {' '}
            item{' '}
          </li>{' '}
          <li className='nav__item' onClick={clickHandler} id={4}>
            {' '}
            item{' '}
          </li>{' '}
        </div>
      </ul>{' '}
    </div>
  );
}

export default Navigation;
