import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Search from './components/pages/Search';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;
