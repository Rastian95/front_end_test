import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Search from './components/pages/Search';
import Article from './components/pages/Article';
import Result from './components/pages/Result';
import Data from '../src/data.json';
import uuid from 'uuid';
import './App.css';
import './assets/Plugins/bootstrap/css/bootstrap.css';
   

function App() {

  const [data] = useState(Data)
  const [result, setResult] = useState("");

  const searchEmail = (mail) => {
      var c = false;
      setResult(data.data.find((person) => {
        if(person.email === mail){c = true;}
        return person.email === mail
      }));
      return c;
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div id="content-wrap">
          <Header />
          { result === "" || result === undefined
            ? [<Search key={uuid.v4()} searchEmail={searchEmail} result={result}/>,<Article key={uuid.v4()} />]
            : [<Result key={uuid.v4()} result={result}/>,<Search key={uuid.v4()} searchEmail={searchEmail} result={result}/>]
          }
        </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
