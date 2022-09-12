import React,{useState} from "react";
import './App.css';
import { ExampleComponent } from './components/ExampleComponent.js';
import i18n from "i18next";

function App() {
  const [language, setLanguage] = useState('en');
  const handleOnclick=(e)=>{
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div className="App">
       <button value='arab' onClick={handleOnclick}>
        Arabic
     </button>
     <button value='en' onClick={handleOnclick}>
        English
     </button>
    <button value='gu' onClick={handleOnclick}>
    Gujarati
    </button>
    <button value='zh' onClick={handleOnclick}>
    Chinese
    </button>
     <ExampleComponent />
     
      {/*<p>used tutorial bellow link  </p>
      <a target="_blank" href='https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/'>https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/</a>*/}
    </div>
  );
}

export default App;
