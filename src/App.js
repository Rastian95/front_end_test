import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Search from './components/pages/Search';
import Article from './components/pages/Article';
import Result from './components/pages/Result';
import './App.css';
import './assets/Plugins/bootstrap/css/bootstrap.css';




function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div id="content-wrap">
          <Header />
          <Result />
          <Search />
          <Article />
        </div>
          <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
