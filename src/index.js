import React from 'react';
import ReactDOM from 'react-dom';

// CSS

import './index.css';

// stateless functional component
// always returns JSX

function BookList () {
<<<<<<< HEAD
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  );
};

// components

function Book () {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

function Image () {
  return <img src='https://images-na.ssl-images-amazon.com/images/I/41mgb2RWkRL._SX346_BO1,204,203,200_.jpg' alt=''></img>;
};

function Title () { return <h1>Dvorestsky's Endgame Manual</h1>; }

function Author () { return <h4>Dvorestsky</h4>; }

// adding the BookList component in the root div

ReactDOM.render(<BookList />, document.getElementById('root'));
=======
  return (
    <section>
      <Book />
    </section>
  )
}

// components

function Book () {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}

function Image () {
  return <img src='https://images-na.ssl-images-amazon.com/images/I/41mgb2RWkRL._SX346_BO1,204,203,200_.jpg' alt=''></img>
}

function Title () { return <h1>Dvorestsky's Endgame Manual</h1> }

function Author () { return <h4>Dvorestsky</h4> }

// adding the BookList component in the root div

ReactDOM.render(<BookList />, document.getElementById('root'))
>>>>>>> fa00dc46151a584641e5337216f853b50bdc5786
