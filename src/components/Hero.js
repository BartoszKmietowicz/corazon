import React from "react";

function Hero() {
  return (
    <section className='Hero'>
      <div className='Hero__left'>
        {' '}
        <h1> Otwieraj się na siebie, na innych, na świat. </h1>{' '}
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem
          exercitationem animi voluptas saepe consequatur sint, ducimus nostrum
          dolore cumque aut placeat sapiente fugit possimus inventore.Quae
          sapiente laborum nobis enim ? Laborum, voluptate accusamus veritatis,
          nesciunt iste repellat nostrum reiciendis temporibus optio tempora
          culpa unde sequi eos esse inventore sit laudantium explicabo.Hic
          nesciunt assumenda eaque soluta veritatis cupiditate magni!Vero.Est
          qui commodi adipisci amet eius, dolores tenetur nobis ?{' '}
        </p>{' '}
      </div>{' '}
      <div className='Hero__right'>
        <div className='Hero__right__image'>
          <img src='https://picsum.photos/600/300?random=1' alt='pic'></img>
        </div>
        <div className='Hero__right__CTA'>
          <a href='#team'>Poznaj nas</a>
        </div>
      </div>{' '}
    </section>
  );
}

export default Hero;
