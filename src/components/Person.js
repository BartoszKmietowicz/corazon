import React from 'react';

function Person({ src = 'https://picsum.photos/200/300', personName }) {
  return (
    <div className='person'>
      <img className='person__image' alt='person' src={src} />
      <div className='person__name'>{personName}</div>
      <p className='person__description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem
        exercitationem animi voluptas saepe consequatur sint, ducimus nostrum
        dolore cumque aut placeat sapiente fugit possimus inventore.Quae
        sapiente laborum nobis enim ? Laborum, voluptate accusamus veritatis,
        nesciunt iste repellat nostrum reiciendis temporibus optio tempora culpa
        unde sequi eos esse inventore sit laudantium explicabo.Hic nesciunt
        assumenda eaque soluta veritatis cupiditate magni!Vero.Est qui commodi
        adipisci amet eius, dolores tenetur nobis ?
      </p>
    </div>
  );
}

export default Person;
