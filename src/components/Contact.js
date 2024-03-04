import React from 'react';

function Contact() {
  return (
    <section id='Contact' className='Contact'>
      <h3>Kontakt</h3>
      <div className='Contact__info'>
        <div className='Contact__info__phone'>
          <p>Zadzwoń do nas już teraz</p>
          <a href='tel:+48512109131'> +48 512 109 131</a>
          <p>lub napisz maila</p>
          <a href='mailto: edytac.corazon@gmail.com'>
            edytac.corazon@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
