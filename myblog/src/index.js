import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <div>Hello world</div>
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
